import { useNavigate } from "react-router-dom";
import UserData from "../UserData/UserData";
import { use, useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { getUserDataFromLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage, sortUsersAlphabetically } from "../functions/functions";
import { useTranslation } from "react-i18next";
import foodData from '../../assets/foodDB.json';
import FoodTable from "./FoodTable";
import FoodTableSearch from "./FoodTableSearch";
import FoodTableFavourites from "./FoodTableFavourites";

export default function FoodTableContainer() {
    const foodList = foodData;

    const { t } = useTranslation();
    const navigate = useNavigate();
    const [filteredFood, setFilteredFood] = useState(foodList);
    const [showFavourites, setShowFavourites] = useState(false);

    const handleUserSelection = () => {
        navigate('/selectUser');
    };

    Object.entries(foodList).forEach(([foodName, foodInfo]) => {
        foodList[foodName]["Name"] = t(`foodDB.product.${foodName}`);
    }
    );
    return (
        <div>
            <h2>{t("foodTable.title")}</h2>
            <p>{t("foodTable.description")}</p>
            <FoodTableSearch foodList={foodList} onFilteredFoodChange={setFilteredFood} />
            <FoodTableFavourites showFavourites={showFavourites} setShowFavourites={setShowFavourites} />
            <FoodTable foodList={filteredFood} onFilteredFoodChange={setFilteredFood} showFavourites={showFavourites} />
        </div>
    );
}