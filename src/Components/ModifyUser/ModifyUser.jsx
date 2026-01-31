import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../Form/Form";
import { useContext, useState } from "react";
import { addNewUserToLocalStorage, saveUserDataToLocalStorage, updateUserInLocalStorage } from "../functions/functions";
import { settings } from "../Settings/settings";
import { UserContext } from "../../App";

export function ModifyUser() {

  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);

  function getDetails(data) {
    setFormData(data);
    setUserData(data);
    console.log("Modify User userData:", userData);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formData.id = formData.name;
    saveUserDataToLocalStorage(formData);
    updateUserInLocalStorage(formData);
    console.log("formData:", formData);

    navigate("/selectUser");
  };

  return (
    <div>
      <h2>{t("modifyUser.title")}</h2>

      <form onSubmit={handleFormSubmit} className="container p-3">

        <Form getDetails={getDetails} userData={userData} />

        <button type="submit" className="btn btn-primary">
          {t("form.saveButton")}
        </button>
      </form>

      <Link to="/selectUser"><button>{t("report.userSelectionButton")}</button></Link>
    </div>

  );
}