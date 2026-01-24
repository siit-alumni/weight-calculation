import React, { useState, useEffect } from 'react';
import { getUsersFromLocalStorage } from '../functions/functions';
import { useTranslation } from 'react-i18next';
import UserData from '../UserData/UserData';

export default function SelectUser() {
    const [users, setUsers] = useState(getUsersFromLocalStorage());
    const [selectedUser, setSelectedUser] = useState(null);
      const { t } = useTranslation();
    const handleSelectUser = () => {
        
        if (selectedUser !== null) {
            console.log('Selected user:', users.profiles[selectedUser]);

        }
    };

    const handleUpdateUser = () => {
        if (selectedUser !== null) {
            console.log('Update user:', users.profiles[selectedUser]);

        }
    };

    const handleCreateUser = () => {
        console.log('Create new user');

    };

    return (
        <div>
            <h2>{t("selectUser.selectUser")}</h2>

            <select
              className="form-select mt-2"
              name="activityTypes"
              id="activityTypes"
              onChange={(e) => setSelectedUser(e.target.value)}
              value={selectedUser || ""}
            >
              <option value="">-- {t("selectUser.selectPlaceholder")} --</option>
              {Object.entries(users.profiles).map(([key]) =>
              (<option key={key} value={key}>
                {users.profiles[key].id}
              </option>))}
            </select>

            <div>
                <button onClick={handleSelectUser}>{t("selectUser.selectButton")}</button>
                <button onClick={handleUpdateUser}>{t("selectUser.modifyButton")}</button>
                <button onClick={handleCreateUser}>{t("selectUser.createButton")}</button>
            </div>
            <UserData userData={users.profiles[selectedUser]} />
        </div>
    );
}