import { useState } from "react";
import { Form } from "../Form/Form";
import IdealWeight from "../IdealWeight/IdealWeight";
import { BmiInterpretation } from "../BmiInterpretation/BmiInterpretation";
import "./Report.css";
import UserData from "../UserData/UserData";
import { BasalMetabolism } from "../BasalMetabolism/BAsalMetabolism";
import { CaloricRequirements } from "../CaloricRequirements/CaloricRequirements";
import { useTranslation } from "react-i18next";
import MacronutrientsPerDay from "../MacronutrientsPerDay/MacronutrientsPerDay";
import { MacronutrientsPercentageSelection } from "../MacronutrientsPerDay/MacronutrientsPercentageSelection";

export function Report() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(null);
  const [macronutrientPercentages, setMacronutrientPercentages] = useState(null);

  function getPercentages(percentages) {
    setMacronutrientPercentages(percentages);
  }

  function getDetails(data) {
    setFormData(data);
    setMacronutrientPercentages(null);
  }

  return (
    <div>
      <Form getDetails={getDetails} />
      {formData && (
        <div className="results">
          <h2>{t("report.title", { name: formData.name })}</h2>
          <UserData userData={formData} />
          <div className="row mb-2">
            <div className="col-md-6 mb-3">
              <BmiInterpretation formData={formData} />
            </div>
            <div className="col-md-6 mb-3">
              <IdealWeight formData={formData} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6 mb-3">
              <BasalMetabolism formData={formData} />
            </div>
            <div className="col-md-6 mb-3">
              <CaloricRequirements formData={formData} />
            </div>
          </div>
          <MacronutrientsPercentageSelection formData={formData} getPercentages={getPercentages} />
          {macronutrientPercentages &&
            <MacronutrientsPerDay formData={formData} macronutrientPercentages={macronutrientPercentages} />}
        </div>
      )}
    </div>
  );
}
