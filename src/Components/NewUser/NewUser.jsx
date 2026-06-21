import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../Form/Form";
import { useState } from "react";
import { addNewUserToLocalStorage, getUsersFromLocalStorage, saveUserDataToLocalStorage, saveUsersToLocalStorage } from "../functions/functions";
import { settings } from "../Settings/settings";

export function NewUser({ show, onClose }) {
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
        // navigate("/selectUser");
    };

    const handleSelectUser = () => {
        navigate('/selectUser');


    }
    
    return (
        <>
            {show && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">

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


                            <div className="modal-body">

                                <form
                                    onSubmit={handleFormSubmit}
                                    className="container p-3"
                                >

                                    <Form
                                        getDetails={getDetails}
                                        userData={emptyUser}
                                    />

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        {t("form.saveButton")}
                                    </button>

                                </form>

                                <button
                                    onClick={handleSelectUser}
                                    className="btn btn-secondary"
                                >
                                    {t("report.userSelectionButton")}
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}