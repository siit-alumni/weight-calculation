import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import foodData from '../../assets/foodDB.json';
import { useTranslation } from 'react-i18next';

export default function TableTest() {
    DataTable.use(DT);

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const [foodTableData, setFoodTableData] = useState([]);
    // const [columns, setColumns] = useState(columns2);
    const columns2 = [
        { title: t("foodTable.product"), data: 'Name' },
        { title: t("foodDB.category.title"), data: 'Category' },
        { title: t("foodDB.subgroup.title"), data: 'Subgroup' },
        { title: t("foodDB.Calories 100g.title"), data: 'Calories 100g' },
        { title: t("foodDB.Protein g.title"), data: 'Protein g' },
        { title: t("foodDB.Carbs g.title"), data: 'Carbs g' },
        { title: t("foodDB.Fat g.title"), data: 'Fat g' },
        { title: t("foodDB.Fiber g.title"), data: 'Fiber g' },
    ];
    
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
        select: true,
        responsive: true,
    };

    useEffect(() => {
        const foodTableData = Object.entries(foodData).map(([foodName, foodInfo]) => ({
            ...foodInfo,
            Name: t(`foodDB.product.${foodName}`),
            Subgroup: t(`foodDB.subgroup.${foodInfo.Subgroup}`),
        }));

        setFoodTableData(foodTableData);
    }, [t]);



    return (
        <div>
            <h1>Table Test</h1>
            <DataTable
                key={i18n.language}
                id="example"
                data={foodTableData}
                options={options}
                columns={columns2}
            />
            <div style={{ display: 'flex', gap: 12 }}>
                <button onClick={() => navigate('/usersList')}>{t("selectUser.userListButton")}</button>
                <button onClick={() => navigate('/selectUser')}>{t("report.userSelectionButton")}</button>
            </div>
        </div>
    )
}

