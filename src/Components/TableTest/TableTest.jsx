import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable from 'datatables.net-react'
import DT from 'datatables.net-dt'
import ColumnControl from 'datatables.net-columncontrol-dt'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'datatables.net-columncontrol-dt/css/columnControl.dataTables.min.css'
import foodData from '../../assets/foodDB.json'
import { useTranslation } from 'react-i18next'
import { UserContext } from '../../App'
import { getUserFromId, updateUserInLocalStorage } from '../functions/functions'
import FoodTableFavourites from '../FoodTable/FoodTableFavourites'

DataTable.use(DT)
DataTable.use(ColumnControl)

export default function TableTest() {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    const { userData, setUserData } = useContext(UserContext)

    const [showFavourites, setShowFavourites] = useState(false)

    const selectedUser = getUserFromId(userData)
    const [favoriteList, setFavoriteList] = useState(
        Array.isArray(selectedUser?.favorites)
            ? selectedUser.favorites
            : []
    )

    useEffect(() => {
        setFavoriteList(
            Array.isArray(selectedUser?.favorites)
                ? selectedUser.favorites
                : []
        )
    }, [selectedUser?.id, selectedUser?.favorites])

    const foodTableData = useMemo(() => {
        return Object.entries(foodData)
            .map(([foodName, foodInfo]) => ({
                ...foodInfo,
                foodKey: foodName,
                Name: t(`foodDB.product.${foodName}`),
                Subgroup: t(`foodDB.subgroup.${foodInfo.Subgroup}`),
                isFavourite: favoriteList.includes(foodName)
            }))
            .filter(row => !showFavourites || row.isFavourite)
    }, [t, i18n.language, favoriteList, showFavourites])

    const columns = [
        {
            title: t('foodTable.product'),
            data: 'Name',
            render: (data, type, row) => `
    <button
        type="button"
        class="favorite-button"
        data-food-key="${encodeURIComponent(row.foodKey)}"
        aria-pressed="${row.isFavourite}"
        style="
            border: 0;
            background: transparent;
            color: ${row.isFavourite ? '#f4b400' : '#c0c1c2'};
            font-size: 20px;
            cursor: pointer;
            margin-right: 8px;
        "
        title="${row.isFavourite ? 'Remove favorite' : 'Add favorite'}"
    >★</button>
    ${data}
            `
        },
        { title: t('foodDB.category.title'), data: 'Category' },
        { title: t('foodDB.subgroup.title'), data: 'Subgroup' },
        { title: t('foodDB.Calories 100g.title'), data: 'Calories 100g' },
        { title: t('foodDB.Protein g.title'), data: 'Protein g' },
        { title: t('foodDB.Carbs g.title'), data: 'Carbs g' },
        { title: t('foodDB.Fat g.title'), data: 'Fat g' },
        { title: t('foodDB.Fiber g.title'), data: 'Fiber g' }
    ]

    const toggleFavourite = (foodKey) => {
        if (!selectedUser) return

        const isFavourite = favoriteList.includes(foodKey)
        const updatedFavorites = isFavourite
            ? favoriteList.filter(key => key !== foodKey)
            : [...favoriteList, foodKey]

        const updatedUser = {
            ...selectedUser,
            favorites: updatedFavorites
        }

        setFavoriteList(updatedFavorites)
        updateUserInLocalStorage(updatedUser)
        setUserData(selectedUser.id)
    }

    useEffect(() => {
        const handleFavouriteClick = (event) => {
            const button = event.target.closest?.('.favorite-button')
            if (!button) return

            event.preventDefault()
            event.stopPropagation()

            const foodKey = decodeURIComponent(button.dataset.foodKey)
            toggleFavourite(foodKey)
        }

        document.addEventListener('click', handleFavouriteClick)

        return () => {
            document.removeEventListener('click', handleFavouriteClick)
        }
    }, [favoriteList, selectedUser?.id])

    const options = {
        layout: {
            topStart: 'info',
            bottom: 'paging',
            bottomStart: null,
            bottomEnd: null
        },
        paging: true,
        searching: true,
        ordering: true,
        info: true,
        responsive: true,

        columnDefs: [
            {
                targets: 2,
                columnControl: ['searchList']
            }
        ],

    }

    return (
        <div>
            <h1>Table Test</h1>

            <FoodTableFavourites
                showFavourites={showFavourites}
                setShowFavourites={setShowFavourites}
            />

            <DataTable
                key={`${i18n.language}-${showFavourites}-${favoriteList.join(',')}`}
                id="example"
                data={foodTableData}
                columns={columns}
                options={options}
            />

            <div style={{ display: 'flex', gap: 12 }}>
                <button onClick={() => navigate('/usersList')}>
                    {t('selectUser.userListButton')}
                </button>

                <button onClick={() => navigate('/selectUser')}>
                    {t('report.userSelectionButton')}
                </button>
            </div>
        </div>
    )
}