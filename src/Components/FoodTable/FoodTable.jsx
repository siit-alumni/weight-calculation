import { useNavigate } from "react-router-dom";
import UserData from "../UserData/UserData";
import { use, useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { getUserDataFromLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage, sortUsersAlphabetically, getUserFromId, updateUserInLocalStorage } from "../functions/functions";
import { useTranslation } from "react-i18next";
import foodData from '../../assets/foodDB.json';

export default function FoodTable({ foodList, onFilteredFoodChange, showFavourites }) {
    // const foodList = foodData;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);
    const selectedUser = getUserFromId(userData);
    const userFavorites = Array.isArray(selectedUser?.favorites) ? selectedUser.favorites : [];
    const [favoriteList, setFavoriteList] = useState(userFavorites);

    useEffect(() => {
        setFavoriteList(userFavorites);
    }, [userData, selectedUser?.id]);
    const handleUserSelection = () => {
        navigate('/selectUser');
    };
    const handleShowFavouritesChange = (event) => {
        setShowFavourites(event.target.checked);
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
    console.log('foodData', foodData);


    return (
        <div>

            <table className="table table-striped table-hover table-sm table-bordered">
                <thead >
                    <tr >
                        <th onClick={handleProductSort}>
                            <div className=" d-flex flex-row justify-content-between align-bottom">
                                {t("foodTable.product")}
                                <a className="icon-link" title={t("usersList.selectUserIcon")} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th>{t("foodDB.category.title")}</th>
                        <th onClick={handleSubgroupSort}>
                            <div className=" d-flex flex-row justify-content-between align-bottom">
                                {t("foodDB.subgroup.title")}
                                <a className="icon-link" title={t("usersList.selectUserIcon")} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th onClick={handleCaloriesSort}>{t("foodDB.Calories 100g.title")}</th>
                        <th onClick={handleProteinSort}>{t("foodDB.Protein g.title")}</th>
                        <th onClick={handleCarbsSort}>{t("foodDB.Carbs g.title")}</th>
                        <th onClick={handleFatSort}>{t("foodDB.Fat g.title")}</th>
                        <th onClick={handleFiberSort}>{t("foodDB.Fiber g.title")}</th>

                    </tr>
                </thead>
                <tbody>
                    {Object.entries(foodList).map(([foodName, foodInfo]) => {
                        const isFavourite = favoriteList.includes(foodName);

                        if (showFavourites && !isFavourite) {
                            return null;
                        }

                        return (
                            <tr key={foodName}>
                                <td>
                                    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                                        <button
                                            type="button"
                                            className="btn btn-link p-0"
                                            style={{ color: isFavourite ? '#f4b400' : '#6c757d', lineHeight: 1 }}
                                            onClick={() => {
                                                const updatedFavorites = isFavourite
                                                    ? favoriteList.filter((fav) => fav !== foodName)
                                                    : [...favoriteList, foodName];

                                                setFavoriteList(updatedFavorites);

                                                const updatedUser = { ...selectedUser, favorites: updatedFavorites };
                                                updateUserInLocalStorage(updatedUser);
                                                setUserData(selectedUser.id);
                                            }}
                                            aria-label={isFavourite ? "Remove favorite" : "Add favorite"}
                                            title={isFavourite ? "Remove favorite" : "Add favorite"}
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                width="18"
                                                height="18"
                                                aria-hidden="true"
                                                style={{ display: 'block', fill: isFavourite ? '#f4b400' : '#6c757d' }}
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        </button>
                                        {t(`foodDB.product.${foodName}`)}
                                    </div>
                                </td>
                                {/* <td>{foodInfo["Name"]}</td> */}
                                <td>{foodInfo["Category"]}</td>
                                <td>{t(`foodDB.subgroup.${foodInfo["Subgroup"]}`)}</td>
                                <td>{foodInfo["Calories 100g"]}</td>
                                <td>{foodInfo["Protein g"]}</td>
                                <td>{foodInfo["Carbs g"]}</td>
                                <td>{foodInfo["Fat g"]}</td>
                                <td>{foodInfo["Fiber g"]}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
            <button onClick={handleUserSelection} className="btn btn-secondary col-md-4 mt-3">{t("report.userSelectionButton")}</button>
        </div>

    );
}