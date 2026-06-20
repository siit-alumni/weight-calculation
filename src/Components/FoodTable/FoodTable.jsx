import { useNavigate } from "react-router-dom";
import UserData from "../UserData/UserData";
import { use, useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { getUserDataFromLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage, sortUsersAlphabetically } from "../functions/functions";
import { useTranslation } from "react-i18next";
import foodData from '../../assets/foodDB.json';

export default function FoodTable({ foodList }) {
    // const foodList = foodData;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleUserSelection = () => {
        navigate('/selectUser');
    };

    return (
        <div>

            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>{t("foodTable.product")}</th>
                        <th>{t("foodDB.category.title")}</th>
                        <th>{t("foodDB.subgroup.title")}</th>
                        <th>{t("foodDB.Calories 100g.title")}</th>
                        <th>{t("foodDB.Protein g.title")}</th>
                        <th>{t("foodDB.Carbs g.title")}</th>
                        <th>{t("foodDB.Fat g.title")}</th>
                        <th>{t("foodDB.Fiber g.title")}</th>
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