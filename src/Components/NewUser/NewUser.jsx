import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../Form/Form";
import { useState } from "react";
import { addNewUserToLocalStorage, saveUserDataToLocalStorage, saveUsersToLocalStorage, sortUsersAlphabetically } from "../functions/functions";
import { settings } from "../Settings/settings";

export function NewUser() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const emptyUser = settings.defaultUser;

    function getDetails(data) {
        setFormData(data);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        formData.id = formData.name;
        // addMacronutrientsToFormData(formData);
        saveUserDataToLocalStorage(formData);
        addNewUserToLocalStorage(formData);
        saveUsersToLocalStorage(sortUsersAlphabetically());
        navigate("/selectUser");
    };

    const handleSelectUser = () => {
        navigate('/selectUser');
    }

    return (
        <div>
            <h2>{t("newUser.title")}</h2>

            <form onSubmit={handleFormSubmit} className="container p-3">

                <Form getDetails={getDetails} userData={emptyUser} />
                <div>
                    <button type="submit" className="btn btn-primary">
                        {t("form.saveButton")}
                    </button>
                </div>
            </form>
            <button onClick={handleSelectUser} className="btn btn-secondary col-md-4">{t("report.userSelectionButton")}</button>

        </div>
    );
}