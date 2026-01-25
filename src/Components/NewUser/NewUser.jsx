import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Form } from "../Form/Form";

export function NewUser() { 
    const { t } = useTranslation();

    return (
        <div>
            <h2>New User Component</h2>
            <Form />
        <Link to="/selectUser"><button>{t("report.userSelectionButton")}</button></Link>
        </div>
    );
}