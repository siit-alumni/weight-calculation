import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../Form/Form";
import { useState } from "react";
import { addNewUserToLocalStorage, saveUserDataToLocalStorage } from "../functions/functions";
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
        saveUserDataToLocalStorage(formData);
        addNewUserToLocalStorage(formData);
        navigate("/selectUser");
      };

    return (
        <div>
            <h2>{t("newUser.title")}</h2>

            <form onSubmit={handleFormSubmit} className="container p-3">

                <Form getDetails={getDetails} userData={emptyUser} />

                <button type="submit" className="btn btn-primary">
                    {t("form.saveButton")}
                </button>
            </form>

            <Link to="/selectUser"><button>{t("report.userSelectionButton")}</button></Link>
        </div>
    );
}