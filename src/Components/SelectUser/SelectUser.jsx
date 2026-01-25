import React, { useState, useEffect, useContext, use } from 'react';
import { getUsersFromLocalStorage } from '../functions/functions';
import { useTranslation } from 'react-i18next';
import UserData from '../UserData/UserData';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function SelectUser() {
    const [users, setUsers] = useState(getUsersFromLocalStorage());
    const [selectedUser, setSelectedUser] = useState(null);
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    const { t } = useTranslation();

    const handleSelectUser = () => {
        setUserData(users.profiles[selectedUser]);
        navigate('/results');
    };

    const handleUpdateUser = () => {
        if (selectedUser !== null) {

            console.log('Update user:', users.profiles[selectedUser]);
            console.log(userData);
        }
    };

    const handleDeleteUser = () => {
        console.log('Delete user:', users.profiles[selectedUser]);
        console.log(userData);
        navigate('/deleteUser');
    };

    const handleCreateUser = () => {
        console.log('Create new user');
        navigate('/newUser');

    };

    useEffect(() => {
        setUserData(users.profiles[selectedUser]);
    }, [selectedUser]);

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

            <UserData />

            <div className="d-flex align-items-center md-3">
                <button className="btn btn-primary col-md-4 " disabled={!selectedUser} onClick={handleSelectUser}>{t("selectUser.selectButton")}</button>
                <button className="btn btn-primary col-md-4 " disabled={!selectedUser} onClick={handleUpdateUser}>{t("selectUser.modifyButton")}</button>
                <button className="btn btn-primary col-md-4" disabled={!selectedUser} onClick={handleDeleteUser}>{t("selectUser.deleteButton")}</button>
                <button className="btn btn-primary col-md-4" onClick={handleCreateUser}>{t("selectUser.createButton")}</button>
            </div>
        </div>
    );
}