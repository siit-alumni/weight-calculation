import { useNavigate } from "react-router-dom";
import UserData from "../UserData/UserData";
import UsersList from "./UsersList";
import { use, useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { getUserDataFromLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage, sortUsersAlphabetically } from "../functions/functions";
import { useTranslation } from "react-i18next";
import UserListSort from "./UserListSort";
import { NewUser } from "../NewUser/NewUser";

export default function UserListContainer() {
    const { userData, setUserData } = useContext(UserContext);
    const [users, setUsers] = useState(getUsersFromLocalStorage());
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(getUserDataFromLocalStorage() || "");
    const { t } = useTranslation();
    const navigate = useNavigate();
    const sortedUsers = sortUsersAlphabetically(users);

    const [showNewUser, setShowNewUser] = useState(false);

    const handleSelectUser = () => {
        // const user = users.profiles.find(profile => profile.id === userData);
        // if (!user) return;
        setUserData(userData);
        saveUserDataToLocalStorage(userData);
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


    const handleFoodTable = () => {
        navigate('/foodTable');
    };

    const handleFilteredUsersChange = (filtered) => {
        setFilteredUsers(filtered);
    };

    const handleCreateUser = () => {
        setShowNewUser(true);
    };

    return (

        <div >
            <h2 className="pb-5">{t("usersList.title")}</h2>

            <h5>{t("usersList.searchTitle")}</h5>
            <UserListSort
                users={sortedUsers}
                onFilteredUsersChange={handleFilteredUsersChange} />
            <div className="d-flex flex-column">
                {users.profiles.length === 0 ? (
                    <p>{t("usersList.noUsers")}</p>
                ) : (
                    <UsersList
                        users={filteredUsers}
                        //
                        setUsers={setUsers}
                    />
                )}

                {/* <UserData  /> */}
            </div>

            <div className="d-flex align-items-center
             justify-content-center flex-wrap">
                {/* <button className="btn btn-primary col-md-4  " disabled={!userData && userData !== 0} onClick={handleSelectUser}>{t("selectUser.selectButton")}</button>
                <button className="btn btn-primary col-md-4 " disabled={!userData && userData !== 0} onClick={handleUpdateUser}>{t("selectUser.modifyButton")}</button>
                <button className="btn btn-primary col-md-4 " disabled={!userData && userData !== 0} onClick={handleDeleteUser}>{t("selectUser.deleteButton")}</button> */}
                <button className="btn btn-primary col-md-4"
                    onClick={handleCreateUser}>
                   {t("selectUser.createButton")}
                </button>

                {showNewUser && (
                    <NewUser
                        show={showNewUser}
                        setUsers={setUsers}
                        onClose={() => setShowNewUser(false)}
                    />
                )}
            </div>

            <button onClick={handleUserSelection}
                className="btn btn-secondary col-md-4 mt-3">
                {t("report.userSelectionButton")}</button>
            <button onClick={handleFoodTable}
                className="btn btn-secondary col-md-4 mt-3">
                {t("foodTable.title")}</button>

        </div>

    );
}