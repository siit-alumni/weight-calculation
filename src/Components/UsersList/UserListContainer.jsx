import { useNavigate } from "react-router-dom";
import UserData from "../UserData/UserData";
import UsersList from "./UsersList";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { getUserDataFromLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage, sortUsersAlphabetically } from "../functions/functions";
import { useTranslation } from "react-i18next";
import UserListSort from "./UserListSort";

export default function UserListContainer() {
    const { userData, setUserData } = useContext(UserContext);
    const [users, setUsers] = useState(getUsersFromLocalStorage());
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(getUserDataFromLocalStorage() || "");
    const { t } = useTranslation();
    const navigate = useNavigate();
    const sortedUsers = sortUsersAlphabetically(users);

    
    const handleSelectUser = () => {
        const user = users.profiles.find(profile => profile.id === userData.id);
        setUserData(user);
        saveUserDataToLocalStorage(user);
        navigate('/results');
    };
    
    const handleUserSelection = () => {
        navigate('/selectUser');
    }
    
    const handleUpdateUser = () => {
        navigate('/editUser');
    };
    
    const handleDeleteUser = () => {
        navigate('/deleteUser');
    };

    const handleCreateUser = () => {
        navigate('/newUser');
    };
    
    const handleFilteredUsersChange = (filtered) => {
        setFilteredUsers(filtered);
    };


    return (

        <div >
            <h2 className="pb-5">{t("usersList.title")}</h2>

            <h5>{t("usersList.searchTitle")}</h5>
            <UserListSort users={sortedUsers} onFilteredUsersChange={handleFilteredUsersChange} />
            <div className="d-flex flex-column">
                {users.profiles.length === 0 ? (
                    <p>{t("usersList.noUsers")}</p>
                ) : (
                    <UsersList  users={filteredUsers} />
                )}

                <UserData  />
            </div>

            <div className="d-flex align-items-center justify-content-center flex-wrap">
                <button className="btn btn-primary col-md-4  " disabled={!userData} onClick={handleSelectUser}>{t("selectUser.selectButton")}</button>
                <button className="btn btn-primary col-md-4 " disabled={!userData} onClick={handleUpdateUser}>{t("selectUser.modifyButton")}</button>
                <button className="btn btn-primary col-md-4 " disabled={!userData} onClick={handleDeleteUser}>{t("selectUser.deleteButton")}</button>
                <button className="btn btn-primary col-md-4" onClick={handleCreateUser}>{t("selectUser.createButton")}</button>

            </div>

            <button onClick={handleUserSelection} className="btn btn-secondary col-md-4 mt-3">{t("report.userSelectionButton")}</button>

        </div>

    );
}