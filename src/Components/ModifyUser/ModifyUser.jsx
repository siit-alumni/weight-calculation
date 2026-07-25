import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Form } from "../Form/Form";
import { useContext, useEffect, useState } from "react";
import { getUserDataFromLocalStorage, getUsersFromLocalStorage, getUserFromId, saveUserDataToLocalStorage, saveUsersToLocalStorage, updateUserInLocalStorage } from "../functions/functions";
import { UserContext } from "../../App";


export function ModifyUser({ user, setUsers }) {

  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const [selectedUserId, setSelectedUserId] = useState(getUserDataFromLocalStorage());

  useEffect(() => {
    setFormData(getUserFromId(userData));
  }, [userData]);

  function getDetails(data) {
    setFormData(data);
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveUserDataToLocalStorage(formData.id);
    updateUserInLocalStorage(formData);

    const updatedUsers = getUsersFromLocalStorage();

    console.log(updatedUsers);

    setUsers(updatedUsers);


    setUsers(getUsersFromLocalStorage());
    // navigate("/selectUser");
  };

  const handleSelectUser = () => {
    navigate("/selectUser");
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSelectedUserId(null);
    setUserData(null);
  };
  return (
    <div>
      <h2>{t("modifyUser.title")}</h2>

      <form onSubmit={handleFormSubmit} className="container p-3">
        <Form
          getDetails={getDetails}
          userData={formData}
        />
        <div className="w-100 modal-footer">
          <button
            className="btn btn-secondary"
            onClick={handleReset}
          >
            {t("form.resetButton")}
          </button>
          <button type="submit"
            className="btn btn-primary col-md-5 me-2"
            data-bs-dismiss="modal">
            {t("form.saveButton")}
          </button>

          <button type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            aria-label="Close">

            {t("common.buttons.cancelButton")}


          </button>
        </div>

      </form>
    </div>
  );
}