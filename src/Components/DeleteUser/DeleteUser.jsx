import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
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

  return (
    <div>
      <h2>{t("deleteUser.title")}</h2>
      <UserData />
      <h3>{t("deleteUser.confirmMessage", { name: userData.name })}</h3>
      <button onClick={handleDelete}>{t("deleteUser.confirmButton")}</button>
      <Link to="/selectUser"><button>{t("common.buttons.cancelButton")}</button></Link>
    </div>
  );
}