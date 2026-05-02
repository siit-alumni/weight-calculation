import { useState, useEffect, useContext, use } from 'react';
import { getUserDataFromLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage, sortUsersAlphabetically } from '../functions/functions';
import { useTranslation } from 'react-i18next';
import UserData from '../UserData/UserData';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function SelectUser() {
    const [users, setUsers] = useState(getUsersFromLocalStorage());
    const [selectedUser, setSelectedUser] = useState(getUserDataFromLocalStorage() || "");
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const sortedUsers = sortUsersAlphabetically(users);

    const handleSelectUser = () => {        
        const user = users.profiles.find(profile => profile.id === selectedUser);
        setUserData(selectedUser);
        saveUserDataToLocalStorage(selectedUser);
        navigate('/results');
    };

    const handleUpdateUser = () => {
        navigate('/editUser');
    };

    const handleDeleteUser = () => {
        navigate('/deleteUser');
    };

    const handleCreateUser = () => {
        navigate('/newUser');
    };

    const handleUserList = () => {
        navigate('/usersList');
    };

    useEffect(() => {
        const user = users.profiles.find(profile => profile.id == selectedUser);
        setUserData(selectedUser);
    }, [selectedUser]);

    return (
        <div>
            <h2>{t("selectUser.selectUser")}</h2>

            <select
                className="form-select mt-2"
                style={ { textAlign: "center" } }
                name="activityTypes"
                id="activityTypes"
                onChange={(e) => setSelectedUser(e.target.value)}
                value={selectedUser || ""}
            >
                <option value="">-- {t("selectUser.selectPlaceholder")} --</option>
                {Object.entries(sortedUsers).map(([key]) =>
                (<option key={sortedUsers[key].id} value={sortedUsers[key].id}>
                    {sortedUsers[key].name}
                </option>))}
            </select>

            <UserData />

            <div className="d-flex align-items-center justify-content-center flex-wrap">
                <button className="btn btn-primary col-md-4  " disabled={!selectedUser} onClick={handleSelectUser}>{t("selectUser.selectButton")}</button>
                <button className="btn btn-primary col-md-4 " disabled={!selectedUser} onClick={handleUpdateUser}>{t("selectUser.modifyButton")}</button>
                <button className="btn btn-primary col-md-4 " disabled={!selectedUser} onClick={handleDeleteUser}>{t("selectUser.deleteButton")}</button>
                <button className="btn btn-primary col-md-4" onClick={handleCreateUser}>{t("selectUser.createButton")}</button>

            </div>
                <button className="btn btn-secondary col-md-4 mt-3" onClick={handleUserList}>{t("selectUser.userListButton")}</button>

        </div>
    );
}