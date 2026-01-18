import React, { useState, useEffect } from 'react';
import { getUsersFromLocalStorage } from '../functions/functions';

export default function SelectUser() {
    const [users, setUsers] = useState(getUsersFromLocalStorage());
    const [selectedUser, setSelectedUser] = useState(null);

    // useEffect(() => {
    //     const storedUsers = getUserDataFromLocalStorage();
    //     if (storedUsers) {
    //         setUsers(JSON.parse(storedUsers));
    //     }
    // }, []);

    console.log(users);
    

    const handleSelectUser = () => {
        console.log(selectedUser);
        
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
            <h2>Select a User</h2>

            <select
              className="form-select mt-2"
              name="activityTypes"
              id="activityTypes"
              onChange={(e) => setSelectedUser(e.target.value)}
              value={selectedUser || ""}
            >
              <option value="">-- Select a user --</option>
              {Object.entries(users.profiles).map(([key]) =>
              (<option key={key} value={key}>
                {users.profiles[key].id}
              </option>))}
            </select>

            <div>
                <button onClick={handleSelectUser}>Select User</button>
                <button onClick={handleUpdateUser}>Update User</button>
                <button onClick={handleCreateUser}>Create New User</button>
            </div>
        </div>
    );
}