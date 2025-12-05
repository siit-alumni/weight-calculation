import { Report } from "./Components/Report/Report";
import "./App.css";
import { useTranslation } from "react-i18next";

export function App() {

  const { t, i18n } = useTranslation();
  const switchLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => switchLanguage("ro")}>Romana</button>
        <button onClick={() => switchLanguage("en")}>English</button>
      </div>
      <div>
        <Report/>
      </div>
    </>
  );
}
