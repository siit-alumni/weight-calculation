import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Form } from "../Form/Form";
import { useContext, useState } from "react";
import { saveUserDataToLocalStorage, saveUsersToLocalStorage, sortUsersAlphabetically, updateUserInLocalStorage } from "../functions/functions";
import { UserContext } from "../../App";

export function ModifyUser() {

  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);

  function getDetails(data) {
    setFormData(data);
    setUserData(data);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveUserDataToLocalStorage(formData);
    updateUserInLocalStorage(formData);
    saveUsersToLocalStorage(sortUsersAlphabetically());
    navigate("/selectUser");
  };
  const handleSelectUser = () => {
    navigate('/selectUser');
  }

  return (
    <div >
      <h2>{t("modifyUser.title")}</h2>

      <form onSubmit={handleFormSubmit} className="container p-3">

        <Form getDetails={getDetails} userData={userData} />

        <button type="submit" className="btn btn-primary col-md-5 me-2">
          {t("form.saveButton")}
        </button>
      </form>
      <button onClick={handleSelectUser} className="btn btn-secondary col-md-3">{t("common.buttons.cancelButton")}</button>


    </div>

  );
}