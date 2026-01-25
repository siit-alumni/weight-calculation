import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import UserData from "../UserData/UserData";
import { useContext } from "react";
import { UserContext } from "../../App";
import { getUsersFromLocalStorage, saveUsersToLocalStorage } from "../functions/functions";

export function DeleteUser() {
    const { t } = useTranslation();
   const navigate = useNavigate();
    const users = getUsersFromLocalStorage();
    const { userData, setUserData } = useContext(UserContext);
    const updatedUsers = users.profiles.filter(user => user.id !== userData.id);

      const handleDelete = (e) => {
        e.preventDefault();
        saveUsersToLocalStorage(updatedUsers);
        navigate('/selectUser');
      };

  return (
    <div>
      <h2>{t("deleteUser.title")}</h2>
      <UserData />
      <h3>{t("deleteUser.confirmMessage", { name: userData.name })}</h3>
      <button onClick={handleDelete}>{t("deleteUser.confirmButton")}</button>
      <Link to="/selectUser"><button>{t("deleteUser.cancelButton")}</button></Link>
    </div>
  );
}