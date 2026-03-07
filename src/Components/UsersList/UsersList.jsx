import { useContext, useEffect, useState } from 'react';
import { findUserInLocalStorage, getUserDataFromLocalStorage } from '../functions/functions';
import { useTranslation } from 'react-i18next';
import './UsersList.css';

import { UserContext } from '../../App';

export default function UsersList({ users }) {

    const { userData, setUserData } = useContext(UserContext);
    const [selectedUserId, setSelectedUserId] = useState(getUserDataFromLocalStorage() || "");
    const { t } = useTranslation();

    const handleListSelectUser = (userId) => {
        setSelectedUserId(userId);
        const user = users.find(profile => profile.id === userId);
        setUserData(user);


    };


    return (
        <div className="users-list-container">

                <ul className="users-list-ul">
                    {users.map((user) => (
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