import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function FoodTableSearch({ foodList, onFilteredFoodChange }) {
    const [searchInput, setSearchInput] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        const filteredFood = Object.fromEntries(
            Object.entries(foodList).filter(([key]) =>
                key.toLowerCase().includes(searchInput.toLowerCase())
            )
        );
        onFilteredFoodChange(filteredFood);
    }, [searchInput]);

    const handleClearSearch = () => {
        setSearchInput('');
    };

    return (
        <div className="pb-4 flex-column d-flex align-items-md-center ">
            <input
                type="text"
                className="form-control"
                placeholder={t("foodTable.searchPlaceholder")}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                style={{ width: "auto", minWidth: "200px" }}
            />

            {searchInput &&
                <button
                    onClick={handleClearSearch}
                    className="btn btn-secondary btn-sm mt-2"
                >
                    {t("usersList.clearButton") || "Clear"}
                </button>}
        </div>
    );
}