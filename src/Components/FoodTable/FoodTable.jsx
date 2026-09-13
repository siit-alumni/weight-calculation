import { useNavigate } from "react-router-dom";
import UserData from "../UserData/UserData";
import { use, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../App";
import { getUserDataFromLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage, sortUsersAlphabetically, getUserFromId, updateUserInLocalStorage } from "../functions/functions";
import { useTranslation } from "react-i18next";
import foodData from '../../assets/foodDB.json';
import SortIcon from "./SortIcon";

export default function FoodTable({ foodList, onFilteredFoodChange, showFavourites }) {
    // const foodList = foodData;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);
    const selectedUser = getUserFromId(userData);
    const userFavorites = Array.isArray(selectedUser?.favorites) ? selectedUser.favorites : [];
    const [favoriteList, setFavoriteList] = useState(userFavorites);
    const [sortDirection, setSortDirection] = useState({ product: null, subgroup: null, calories: null, protein: null, carbs: null, fat: null, fiber: null });
    const sortDirectionRef = useRef(sortDirection);

    useEffect(() => {
        setFavoriteList(userFavorites);
    }, [userData, selectedUser?.id]);
    useEffect(() => {
        sortDirectionRef.current = sortDirection;
    }, [sortDirection]);
    const handleUserSelection = () => {
        navigate('/selectUser');
    };
    // const handleShowFavouritesChange = (event) => {
    //     setShowFavourites(event.target.checked);
    // };
    const handleProductSort = () => {
        const direction = sortDirectionRef.current.product === 'asc' ? 'desc' : 'asc';
        sortDirectionRef.current = {
            ...sortDirectionRef.current,
            product: direction,
            subgroup: null,
            calories: null,
            protein: null,
            carbs: null,
            fat: null,
            fiber: null
        };
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                (direction === 'asc' ? 1 : -1) *
                t(`foodDB.product.${keyA}`).localeCompare(t(`foodDB.product.${keyB}`))
            )
        );
        setSortDirection(sortDirectionRef.current);
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };
    const handleCaloriesSort = () => {
        const direction = sortDirection.calories === 'asc' ? 'desc' : 'asc';
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                (direction === 'asc' ? 1 : -1) *
                (foodA["Calories 100g"] - foodB["Calories 100g"])
            )
        );
        setSortDirection({
            product: null,
            subgroup: null,
            calories: direction,
            protein: null,
            carbs: null,
            fat: null,
            fiber: null
        });
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };
    const handleProteinSort = () => {
        const direction = sortDirection.protein === 'asc' ? 'desc' : 'asc';
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                (direction === 'asc' ? 1 : -1) *
                foodA["Protein g"] - foodB["Protein g"]
            ));
                    setSortDirection({
            product: null,
            subgroup: null,
            calories: null,
            protein: direction,
            carbs: null,
            fat: null,
            fiber: null
        });
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };
    const handleCarbsSort = () => {
        const direction = sortDirection.carbs === 'asc' ? 'desc' : 'asc';
        setSortDirection({
            product: null,
            subgroup: null,
            calories: null,
            protein: null,
            carbs: direction,
            fat: null,
            fiber: null
        });
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                (direction === 'asc' ? 1 : -1) *
                foodA["Carbs g"] - foodB["Carbs g"]
            )
        );
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };
    const handleFatSort = () => {
        const direction = sortDirection.fat === 'asc' ? 'desc' : 'asc';
        setSortDirection({
            product: null,
            subgroup: null,
            calories: null,
            protein: null,
            carbs: null,
            fat: direction,
            fiber: null
        });
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                (direction === 'asc' ? 1 : -1) *
                foodA["Fat g"] - foodB["Fat g"]
            )
        );
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };
    const handleFiberSort = () => {
        const direction = sortDirection.fiber === 'asc' ? 'desc' : 'asc';
        setSortDirection({
            product: null,
            subgroup: null,
            calories: null,
            protein: null,
            carbs: null,
            fat: null,
            fiber: direction
        });
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                (direction === 'asc' ? 1 : -1) *
                foodA["Fiber g"] - foodB["Fiber g"]
            )
        );
        if (onFilteredFoodChange) {
            onFilteredFoodChange(sortedFoodList);
        }
    };
    const handleSubgroupSort = () => {
        const direction = sortDirection.subgroup === 'asc' ? 'desc' : 'asc';
        const sortedFoodList = Object.fromEntries(
            Object.entries(foodList).sort(([keyA, foodA], [keyB, foodB]) =>
                (direction === 'asc' ? 1 : -1) *
                t(`foodDB.subgroup.${foodA["Subgroup"]}`).localeCompare(t(`foodDB.subgroup.${foodB["Subgroup"]}`))
            )
        );
        setSortDirection({
            product: null,
            subgroup: direction,
            calories: null,
            protein: null,
            carbs: null,
            fat: null,
            fiber: null
        });
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
                                <a className="icon-link" title={t("foodTable.sort")} >
                                    <SortIcon sortDirection={sortDirection.product} />
                                </a>
                            </div>
                        </th>
                        <th>{t("foodDB.category.title")}</th>
                        <th onClick={handleSubgroupSort}>
                            <div className=" d-flex flex-row justify-content-between align-bottom">
                                {t("foodDB.subgroup.title")}
                                <a className="icon-link" style={{ paddingLeft: '10px' }} title={t("foodTable.sort")} >
                                    <SortIcon sortDirection={sortDirection.subgroup} />
                                </a>
                            </div>
                        </th>
                        <th onClick={handleCaloriesSort}>
                            <div className=" d-flex flex-row justify-content-between align-bottom">
                                {t("foodDB.Calories 100g.title")}
                                <a className="icon-link" style={{ paddingLeft: '10px' }} title={t("foodTable.sort")} >
                                    <SortIcon sortDirection={sortDirection.calories} />
                                </a>
                            </div>
                        </th>
                        <th onClick={handleProteinSort}>
                            <div className=" d-flex flex-row justify-content-between align-bottom">
                                {t("foodDB.Protein g.title")}
                                <a className="icon-link" style={{ paddingLeft: '10px' }} title={t("foodTable.sort")} >
                                    <SortIcon sortDirection={sortDirection.protein} />
                                </a>
                            </div>
                        </th>
                        <th onClick={handleCarbsSort}>
                            <div className=" d-flex flex-row justify-content-between align-bottom">
                                {t("foodDB.Carbs g.title")}
                                <a className="icon-link" style={{ paddingLeft: '10px' }} title={t("foodTable.sort")} >
                                    <SortIcon sortDirection={sortDirection.carbs} />
                                </a>
                            </div>
                        </th>
                        <th onClick={handleFatSort}>
                            <div className=" d-flex flex-row justify-content-between align-bottom">
                                {t("foodDB.Fat g.title")}
                                <a className="icon-link" style={{ paddingLeft: '10px' }} title={t("foodTable.sort")} >
                                    <SortIcon sortDirection={sortDirection.fat} />
                                </a>
                            </div>
                        </th>
                        <th onClick={handleFiberSort}>
                            <div className=" d-flex flex-row justify-content-between align-bottom">
                                {t("foodDB.Fiber g.title")}
                                <a className="icon-link" style={{ paddingLeft: '10px' }} title={t("foodTable.sort")} >
                                    <SortIcon sortDirection={sortDirection.fiber} />
                                </a>
                            </div>
                        </th>

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
                                                style={{ display: 'block', fill: isFavourite ? '#f4b400' : '#c0c1c2' }}
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