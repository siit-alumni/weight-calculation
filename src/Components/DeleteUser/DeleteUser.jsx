import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import UserData from "../UserData/UserData";
import { useContext } from "react";
import { UserContext } from "../../App";
import { deleteUserFromLocalStorage, getUsersFromLocalStorage, saveUsersToLocalStorage } from "../functions/functions";

export function DeleteUser() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const users = getUsersFromLocalStorage();
  const { userData, setUserData } = useContext(UserContext);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteUserFromLocalStorage(userData);
    navigate('/selectUser');
  };

  const handleSelectUser = () => {
    navigate('/selectUser');
  };

  return (
    <div>
      <h2>{t("deleteUser.title")}</h2>
      <UserData />
      <h3>{t("deleteUser.confirmMessage", { name: userData.name })}</h3>
      <div className="d-flex align-items-center justify-content-center flex-wrap mt-3">
        <button onClick={handleDelete} className="btn btn-primary col-md-3 me-2">{t("deleteUser.confirmButton")}</button>
        <button onClick={handleSelectUser} className="btn btn-secondary col-md-3">{t("common.buttons.cancelButton")}</button>
      </div>
    </div>
  );
}