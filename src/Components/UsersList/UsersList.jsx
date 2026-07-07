import { useContext, useEffect, useState } from 'react';
import { findUserInLocalStorage, getUserDataFromLocalStorage, saveUserDataToLocalStorage } from '../functions/functions';
import { useTranslation } from 'react-i18next';
import './UsersList.css';

import { clearUserDataFromLocalStorage, deleteUserFromLocalStorage, replaceUsersIDs } from "../functions/functions";

import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import UserData from '../UserData/UserData';
import SelectUser from '../SelectUser/SelectUser';
import { ModifyUser } from '../ModifyUser/ModifyUser';
import { DeleteUser } from '../DeleteUser/DeleteUser';
import UserListSort from './UserListSort';
import { Results } from '../Results/Results';
import { Form } from '../Form/Form';
import { settings } from '../Settings/settings';

export default function UsersList({ users }) {

    const { userData, setUserData } = useContext(UserContext);
    const [displayUser, setDisplayUser] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(getUserDataFromLocalStorage());
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [modalType, setModalType] = useState("");


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
        // setModalType("Select");
    };

    const handleUserSelection = () => {
        // navigate('/selectUser');
        // setUserData(userData);
        // setModalType("Select");
    }
    //eu
   const handleDeleteUser = (userId) => {
    setUserData(userId);
    setModalType("Delete");
};

    const handleDelete = () => {
        deleteUserFromLocalStorage(userData);
        clearUserDataFromLocalStorage();
        setUserData(null);
        replaceUsersIDs();
        navigate('/selectUser');
    };
    //eu
   const handleUpdateUser = (userId) => {
      console.log(
  users.map(user => ({
    id: user.id,
    name: user.name
  }))
);
    setUserData(userId);
    setModalType("Edit");
};

   const handleDisplayUser = (userId) => {
    setUserData(userId);
    setModalType("Display");
};

    const handleReset = (e) => {
        e.preventDefault();
        setSelectedUserId(null);
        setUserData(null);
    };


    const modalTitles = {
        Delete: t("usersList.deleteUserIcon"),
        Edit: t("usersList.updateUserIcon"),
        Display: "User info"
    };

    const closeModal = () => {
        setModalType(null);
    };

   console.log(users);

    return (

        <div className="users-list-container 
        border-top border-bottom ">

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
                            <div className='d-flex gap-1'>
                                <a className="icon-link"
                                    title={t("usersList.selectUserIcon")}
                                    onClick={handleSelectUser} >
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="16" height="16" fill="currentColor"
                                        className="bi bi-check2-square" viewBox="0 0 16 16">
                                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                                    </svg>
                                </a>
                                <a className="icon-link"
                                    title={t("usersList.deleteUserIcon")}
                                    onClick={() => handleDeleteUser(user.id)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#userInfoModal">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="16" height="16" fill="currentColor"
                                        className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                    </svg>
                                </a>
                                <a className="icon-link"
                                    title={t("usersList.updateUserIcon")}
                                    onClick={() => handleUpdateUser(user.id)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#userInfoModal">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="16" height="16" fill="currentColor"
                                        className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                    </svg>
                                </a>
                                <a className="icon-link"
                                    title={displayUserDataText}
                                  onClick={() => handleDisplayUser(user.id)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#userInfoModal">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="16" height="16" fill="currentColor"
                                        className="bi bi-info-square" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>

            <div className="modal fade"
                id="userInfoModal"
                tabIndex="-1"
                aria-labelledby="userInfoModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {modalTitles[modalType]}
                            </h5>
                            <button type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {modalType === "Delete" && <DeleteUser user={userData} />}
                            {modalType === "Edit" && <ModifyUser user={userData} />}
                            {modalType === "Display" && <UserData user={userData} />}
                        </div>
                        <div className="modal-footer">
{/* 
                            {modalType === "Edit" && (
                                <>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={handleReset}
                                    >
                                        {t("form.resetButton")}
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                       
                                    >
                                        {t("form.saveButton")}
                                        
                                        
                                    </button>

                                    <button type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close
                                    </button>
                                </>
                            )} */}
                            {modalType === "Delete" && (
                                <>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-bs-dismiss="modal"
                                        onClick={() => {
                                            handleDelete();
                                            closeModal();
                                        }}
                                    >
                                        {t("deleteUser.confirmButton")}
                                    </button>
                                    <button type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal">
                                        {t("common.buttons.cancelButton")}
                                    </button>
                                </>
                            )}

                            {modalType === "Display" && (
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            )}

                        </div>
                    </div>
                </div>
            </div>


        </div>

        //

    );
}