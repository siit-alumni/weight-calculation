import { Report } from "./Components/Report/Report";
import "./App.css";
import { useTranslation } from "react-i18next";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SelectUser from "./Components/SelectUser/SelectUser";
import { ModifyUser } from "./Components/ModifyUser/ModifyUser";
import { DeleteUser } from "./Components/DeleteUser/DeleteUser";
import { Results } from "./Components/Results/Results";
import { NewUser } from "./Components/NewUser/NewUser";
import UserListContainer from "./Components/UsersList/UserListContainer";
import { replaceUsersIDs } from "./Components/functions/functions";

export function App() {

  const { t, i18n } = useTranslation();
  const switchLanguage = (lng) => i18n.changeLanguage(lng);
  const [userData, setUserData] = useState(null);

  replaceUsersIDs();

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">Weight Calculator</a>
          <div className="app-header1">
            <button className="btn  btn-sm btn-outline-secondary me-2" onClick={() => switchLanguage("ro")}>Romana</button>
            <button className="btn  btn-sm btn-outline-secondary" onClick={() => switchLanguage("en")}>English</button>
          </div>
        </div>
      </nav>

      <div className="container py-3">
        <UserContext.Provider value={{ userData, setUserData }}>

          <Routes>
            <Route path="/selectUser" element={<SelectUser />} />
            <Route path="/editUser" element={<ModifyUser />} />
            <Route path="/deleteUser" element={<DeleteUser />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route exact path="" element={<SelectUser />} />
            <Route path="/results" element={<Results />} />
            <Route path="/usersList" element={<UserListContainer />} />


          </Routes >
        </UserContext.Provider>
      </div>

    </>
  );
}
export const UserContext = createContext();
