import { useContext, useEffect, useState } from 'react';
import { findUserInLocalStorage, getUserDataFromLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage } from '../functions/functions';
import { useTranslation } from 'react-i18next';
import './UsersList.css';

import { UserContext } from '../../App';

export default function UsersList({ onSelectUser }) {
    const [users, setUsers] = useState(getUsersFromLocalStorage());
    const { userData, setUserData } = useContext(UserContext);
    const [selectedUserId, setSelectedUserId] = useState(getUserDataFromLocalStorage() || "");
    const { t } = useTranslation();

    const handleListSelectUser = (userId) => {
        setSelectedUserId(userId);
        if (onSelectUser) {
            onSelectUser(userId);
        }
        const user = users.profiles.find(profile => profile.id === userId);
        setUserData(user);

    };


    // useEffect(() => {
    //     const user = users.profiles.find(profile => profile.id === selectedUserId);
    //     setUserData(user);
    // }, [selectedUserId]);

    return (
        <div className="users-list-container">

                <ul className="users-list-ul">
                    {users.profiles.map((user) => (
                        <li
                            className={selectedUserId === user.id ? 'selected' : ''}
                            key={user.id}
                            onClick={() => handleListSelectUser(user.id)}
                        >
                            {user.name}
                        </li>
                    ))}
                </ul>
         
        </div>
    );
}