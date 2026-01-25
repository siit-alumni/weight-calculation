import { Link } from "react-router-dom";
import UserData from "../UserData/UserData";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useTranslation } from "react-i18next";
import { BmiInterpretation } from "../BmiInterpretation/BmiInterpretation";
import IdealWeight from "../IdealWeight/IdealWeight";
import { BasalMetabolism } from "../BasalMetabolism/BAsalMetabolism";
import { CaloricRequirements } from "../CaloricRequirements/CaloricRequirements";
import { MacronutrientsPercentageSelection } from "../MacronutrientsPerDay/MacronutrientsPercentageSelection";
import MacronutrientsPerDay from "../MacronutrientsPerDay/MacronutrientsPerDay";


export function Results() {
    const { userData, setUserData } = useContext(UserContext);
    const { t } = useTranslation();
const [macronutrientPercentages, setMacronutrientPercentages] = useState(null);
    function getPercentages(percentages) {
        setMacronutrientPercentages(percentages);
    }

    function getDetails(data) {
        setUserData(data);
        setMacronutrientPercentages(null);
    }
        return (
            <div>
                <h2>Results Component</h2>
                <div className="results">
                    <h2>{t("report.title", { name: userData.name })}</h2>
                    <UserData />
                    <div className="row mb-2">
                        <div className="col-md-6 mb-3">
                            <BmiInterpretation formData={userData} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <IdealWeight formData={userData} />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-6 mb-3">
                            <BasalMetabolism formData={userData} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <CaloricRequirements formData={userData} />
                        </div>
                    </div>
                    <MacronutrientsPercentageSelection formData={userData} getPercentages={getPercentages} />
                    {macronutrientPercentages &&
                        <MacronutrientsPerDay formData={userData} macronutrientPercentages={macronutrientPercentages} />}
                </div>
                <Link to="/selectUser"><button>{t("report.userSelectionButton")}</button></Link>
            </div>
        );
    }