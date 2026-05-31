import { useNavigate } from "react-router-dom";
import UserData from "../UserData/UserData";
import { use, useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { getUserDataFromLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage, sortUsersAlphabetically } from "../functions/functions";
import { useTranslation } from "react-i18next";
import foodData from '../../assets/foodDB.json';

export default function FoodTable() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleUserSelection = () => {
        navigate('/selectUser');
    };

    return (
        <div>
            <h2>{t("foodTable.title")}</h2>
            <p>{t("foodTable.description")}</p>

            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>{t("foodTable.product")}</th>
                        <th>{t("common.Macronutrients.calories")}/100g</th>
                        <th>{t("common.Macronutrients.protein")}</th>
                        <th>{t("common.Macronutrients.carbs")}</th>
                        <th>{t("common.Macronutrients.fat")}</th>
                        <th>{t("common.Macronutrients.fiber")}</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(foodData).map(([foodName, foodInfo]) => (
                        <tr key={foodName}>
                            <td>{foodName}</td>
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