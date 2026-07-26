import React from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import foodData from '../../assets/foodDB.json';
import { useTranslation } from 'react-i18next';

export default function TableTest() {
    DataTable.use(DT);

    const { t } = useTranslation();
    const navigate = useNavigate();
    const foodList = foodData;

        Object.entries(foodList).forEach(([foodName, foodInfo]) => {
        foodList[foodName]["Name"] = t(`foodDB.product.${foodName}`);
    });

        const foodTableData = Object.entries(foodList).map(([foodName, foodInfo]) => ({
        ...foodInfo,
        Subgroup: t(`foodDB.subgroup.${foodInfo.Subgroup}`),
    }));


console.log('foodData', foodData);
console.log('foodList', foodList);
console.log('foodTableData', foodTableData);


    return (
        <div>
            <h1>Table Test</h1>
            <DataTable
                id="example"
                options={{
                    layout: {
            topStart: 'info',
            bottom: 'paging',
            bottomStart: null,
            bottomEnd: null
        },
                    data: foodTableData,
                    columns: [
                        { title: t("foodTable.product"), data: 'Name',},
                        { title: t("foodDB.category.title"), data: 'Category' },
                        { title: t("foodDB.subgroup.title"), data: 'Subgroup' },
                        { title: t("foodDB.Calories 100g.title"), data: 'Calories 100g' },
                        { title: t("foodDB.Protein g.title"), data: 'Protein g' },
                        { title: t("foodDB.Carbs g.title"), data: 'Carbs g' },
                        { title: t("foodDB.Fat g.title"), data: 'Fat g' },
                        { title: t("foodDB.Fiber g.title"), data: 'Fiber g' },
                    ],
                    paging: true,
                    searching: true,
                    ordering: true,
                    info: true,
                    select: true,
                }}
            />
            <div style={{ display: 'flex', gap: 12 }}>
                <button onClick={() => navigate('/usersList')}>{t("selectUser.userListButton")}</button>
                <button onClick={() => navigate('/selectUser')}>{t("report.userSelectionButton")}</button>
            </div>
        </div>
    )
}

