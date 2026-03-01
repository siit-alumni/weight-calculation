import { useContext, useState } from 'react';
import { findUserInLocalStorage, getUsersFromLocalStorage } from '../functions/functions';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './UsersList.css';
import UserData from '../UserData/UserData';
import { UserContext } from '../../App';

export default function UsersList({ onSelectUser }) {
    const [users, setUsers] = useState(getUsersFromLocalStorage());
    const { userData, setUserData } = useContext(UserContext);
    const [selectedUserId, setSelectedUserId] = useState(null); 
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleSelectUser = (userId) => {
        setSelectedUserId(userId);
        if (onSelectUser) {
            onSelectUser(userId);
        }
    };

    const handleUserSelection = () => {
        navigate('/selectUser');
    }


    return (
        <div className="users-list-container">
            <h2>{t("usersList.title")}</h2>
            {users.profiles.length === 0 ? (
                <p>{t("usersList.noUsers")}</p>
            ) : (
                <ul className="users-list-ul">
                    {users.profiles.map((user) => (
                        <li
                            key={user.id}
                            onClick={() => handleSelectUser(user.id)}
                            className={selectedUserId === user.id ? 'selected' : ''}
                        >
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
            {selectedUserId && <p >{t("usersList.selectedUser", { name: findUserInLocalStorage(selectedUserId)?.name })}</p>}

                  <UserData />

            <button onClick={handleUserSelection} className="btn btn-primary col-md-6 mt-6">{t("report.userSelectionButton")}</button>
        </div>
    );
}