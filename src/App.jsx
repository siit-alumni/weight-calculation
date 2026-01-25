import { Report } from "./Components/Report/Report";
import "./App.css";
import { useTranslation } from "react-i18next";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SelectUser from "./Components/SelectUser/SelectUser";
import { ModifyUser } from "./Components/ModifyUser/ModifyUser";
import { DeleteUser } from "./Components/DeleteUser/DeleteUser";
import { Results } from "./Components/Results/Results";

export function App() {

  const { t, i18n } = useTranslation();
  const switchLanguage = (lng) => i18n.changeLanguage(lng);
  const [userData, setUserData] = useState(null);
  console.log(userData);


  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => switchLanguage("ro")}>Romana</button>
        <button onClick={() => switchLanguage("en")}>English</button>
      </div>
      <UserContext.Provider value={{ userData, setUserData }}>
        {/* <div>
          <Report />
        </div> */}
      <Routes>
        <Route exact path="/selectUser" element={<SelectUser />} />
        <Route path="/editUser" element={<ModifyUser />} />
        <Route path="/deleteUser" element={<DeleteUser />} />
        <Route path="/results" element={<Results />} />

      </Routes >
        </UserContext.Provider>
    </>
  );
}
export const UserContext = createContext();
