import { useContext, useEffect, useState } from 'react';
import { findUserInLocalStorage, getUserDataFromLocalStorage, saveUserDataToLocalStorage } from '../functions/functions';
import { useTranslation } from 'react-i18next';
import './UsersList.css';

import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function UsersList({ users }) {

    const { userData, setUserData } = useContext(UserContext);
    const [selectedUserId, setSelectedUserId] = useState(getUserDataFromLocalStorage());
    const { t } = useTranslation();
    const navigate = useNavigate();
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



    return (
        <div className="users-list-container border-top border-bottom mb-3 ">

            <ul className="users-list-ul">
                {users.map((user) => (
                    <li
                        // className={selectedUserId === user.id ? 'selected' : ''}
                        key={user.id}
                        onClick={() => handleListSelectUser(user.id)}
                    >
                        <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <div>
                                {user.name}
                            </div>
                            <button className="btn btn-primary  " onClick={handleSelectUser}>{t("selectUser.selectButton")}</button>
                            <button className="btn btn-primary  " onClick={handleUpdateUser}>{t("selectUser.modifyButton")}</button>
                            <button className="btn btn-primary " onClick={handleDeleteUser}>{t("selectUser.deleteButton")}</button>

                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}