import { useContext, useEffect, useState } from 'react';
import { findUserInLocalStorage, getUserDataFromLocalStorage, saveUserDataToLocalStorage } from '../functions/functions';
import { useTranslation } from 'react-i18next';
import './UsersList.css';

import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import UserData from '../UserData/UserData';

export default function UsersList({ users }) {

    const { userData, setUserData } = useContext(UserContext);
    const [displayUser, setDisplayUser] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(getUserDataFromLocalStorage());
    const { t } = useTranslation();
    const navigate = useNavigate();

    const displayUserDataText = displayUser ? t("selectUser.hideUserDataButton") : t("selectUser.displayUserButton");
    const handleListSelectUser = (userId) => {
        setSelectedUserId(userId);
        const user = users.find(profile => profile.id === userId);
        setUserData(userId);
    };
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
    const handleDisplayUser = () => {
        setDisplayUser(prev => !prev);
    }



    return (
        <div className="users-list-container border-top border-bottom ">

            <ul className="users-list-ul">
                {users.map((user) => (
                    <li
                        // className={selectedUserId === user.id ? 'selected' : ''}
                        key={user.id}
                        onClick={() => handleListSelectUser(user.id)}
                    >
                        <div className="user-list-div">
                            <div>
                                {user.name}
                            </div>
                            <div>
                                <button className="btn btn-primary  " onClick={handleSelectUser}>{t("selectUser.selectButton")}</button>
                                <button className="btn btn-primary  " onClick={handleUpdateUser}>{t("selectUser.modifyButton")}</button>
                                <button className="btn btn-primary " onClick={handleDeleteUser}>{t("selectUser.deleteButton")}</button>
                                <button className="btn btn-primary " onClick={handleDisplayUser}>{displayUserDataText}</button>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>
            <div>
                {displayUser && <UserData />}

            </div>
        </div>
    );
}