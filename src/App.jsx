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

export function App() {

  const { t, i18n } = useTranslation();
  const switchLanguage = (lng) => i18n.changeLanguage(lng);
  const [userData, setUserData] = useState(null);



  return (
    <>
      <div className="app-header">
        <button onClick={() => switchLanguage("ro")}>Romana</button>
        <button onClick={() => switchLanguage("en")}>English</button>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">

          <UserContext.Provider value={{ userData, setUserData }}>

            <Routes>
              <Route path="/selectUser" element={<SelectUser />} />
              <Route path="/editUser" element={<ModifyUser />} />
              <Route path="/deleteUser" element={<DeleteUser />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route exact path="" element={<SelectUser />} />
              <Route path="/results" element={<Results />} />

            </Routes >
          </UserContext.Provider>
        </div>
      </div>
    </>
  );
}
export const UserContext = createContext();
