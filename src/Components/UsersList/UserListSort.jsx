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

    return (
        <div className="pb-4">
            <input
                type="text"
                placeholder={t("usersList.searchPlaceholder")}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>
    );
}