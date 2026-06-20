import { useNavigate } from "react-router-dom";
import UserData from "../UserData/UserData";
import { use, useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { getUserDataFromLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage, sortUsersAlphabetically } from "../functions/functions";
import { useTranslation } from "react-i18next";
import foodData from '../../assets/foodDB.json';

export default function FoodTable({ foodList, onFilteredFoodChange }) {
    // const foodList = foodData;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleUserSelection = () => {
        navigate('/selectUser');
    };
    const handleProductSort = () => {
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA], [keyB]) =>   
                t(`foodDB.product.${keyA}`).localeCompare(t(`foodDB.product.${keyB}`))
            )
        );
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };
    const handleCaloriesSort = () => {
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                foodA["Calories 100g"] - foodB["Calories 100g"]
            )
        );
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };
    const handleProteinSort = () => {
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                foodA["Protein g"] - foodB["Protein g"]
            )
        );
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };
    const handleCarbsSort = () => {
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                foodA["Carbs g"] - foodB["Carbs g"]
            )
        );
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };
    const handleFatSort = () => {
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                foodA["Fat g"] - foodB["Fat g"]
            )
        );
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };
    const handleFiberSort = () => {
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                foodA["Fiber g"] - foodB["Fiber g"]
            )
        );
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };
    const handleSubgroupSort = () => {
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                t(`foodDB.subgroup.${foodA["Subgroup"]}`).localeCompare(t(`foodDB.subgroup.${foodB["Subgroup"]}`))
            )
        );
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };


    return (    
        <div>

            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th onClick={handleProductSort}>{t("foodTable.product")}</th>
                        <th>{t("foodDB.category.title")}</th>
                        <th onClick={handleSubgroupSort}>{t("foodDB.subgroup.title")}</th>
                        <th onClick={handleCaloriesSort}>{t("foodDB.Calories 100g.title")}</th>
                        <th onClick={handleProteinSort}>{t("foodDB.Protein g.title")}</th>
                        <th onClick={handleCarbsSort}>{t("foodDB.Carbs g.title")}</th>
                        <th onClick={handleFatSort}>{t("foodDB.Fat g.title")}</th>
                        <th onClick={handleFiberSort}>{t("foodDB.Fiber g.title")}</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(foodList).map(([foodName, foodInfo]) => (
                        <tr key={foodName}>
                            <td>{t(`foodDB.product.${foodName}`)}</td>
                            {/* <td>{foodInfo["Name"]}</td> */}
                            <td>{foodInfo["Category"]}</td>
                            <td>{t(`foodDB.subgroup.${foodInfo["Subgroup"]}`)}</td>
                            <td>{foodInfo["Calories 100g"]}</td>
                            <td>{foodInfo["Protein g"]}</td>
                            <td>{foodInfo["Carbs g"]}</td>
                            <td>{foodInfo["Fat g"]}</td>
                            <td>{foodInfo["Fiber g"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleUserSelection} className="btn btn-secondary col-md-4 mt-3">{t("report.userSelectionButton")}</button>
        </div>

    );
}