import { useNavigate } from "react-router-dom";
import UserData from "../UserData/UserData";
import { use, useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { getUserDataFromLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage, sortUsersAlphabetically } from "../functions/functions";
import { useTranslation } from "react-i18next";

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
            <button onClick={handleUserSelection} className="btn btn-secondary col-md-4 mt-3">{t("report.userSelectionButton")}</button>
        </div>

    );
}