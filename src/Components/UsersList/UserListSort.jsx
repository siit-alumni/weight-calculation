import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function UserListSort({ users, onFilteredUsersChange }) {
    const [searchInput, setSearchInput] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        onFilteredUsersChange(filteredUsers);
    }, [searchInput]);

    const handleClearSearch = () => {
        setSearchInput('');
    };

    return (
        <div className="pb-4 flex-column d-flex align-items-md-center ">
            <input
                type="text"
                className="form-control"
                placeholder={t("usersList.searchPlaceholder")}
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