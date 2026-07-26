import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../Form/Form";
import { useState } from "react";
import { addNewUserToLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage, saveUsersToLocalStorage } from "../functions/functions";
import { settings } from "../Settings/settings";

import './NewUser.css';


export function NewUser({ show, onClose, setUsers }) {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const emptyUser = settings.defaultUser;
    const length = Object.keys(getUsersFromLocalStorage().profiles).length;


    function getDetails(data) {
        setFormData(data);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        formData.id = length;
        saveUserDataToLocalStorage(formData.id);
        addNewUserToLocalStorage(formData);
        onClose();
       
        const updatedUsers = getUsersFromLocalStorage();

        console.log(updatedUsers);
        setUsers(updatedUsers);
        setUsers(getUsersFromLocalStorage());

        navigate("/usersList");

    };

    const handleSelectUser = () => {
        navigate('/selectUser');

    }
    return (
        <>
            {show && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content modal-content-user mt-5">
                            <div className="modal-header">
                                <h2 className="modal-title">
                                    {t("newUser.title")}
                                </h2>

                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={onClose}
                                ></button>
                            </div>

                            <div className="modal-body mt-5">

                                <form onSubmit={handleFormSubmit} className="w-100">
                                    <Form
                                        getDetails={getDetails}
                                        userData={emptyUser}
                                    />

                                    <div className="modal-footer"></div>
                                    <div className="d-flex justify-content-end gap-2 mt-3">
                                        <button
                                            type="button"
                                            onClick={handleSelectUser}
                                            className="btn btn-secondary"
                                        >
                                            {t("report.userSelectionButton")}
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        // setUsers={setUsers}
                                        >
                                            {t("form.saveButton")}
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                            onClick={onClose}
                                        >
                                            {t("common.buttons.cancelButton")}
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}