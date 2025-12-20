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

export function Report() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(null);

  function getDetails(data) {
    setFormData(data);
  }

  return (
    <div>
      <Form getDetails={getDetails} />
      {formData && (
        <div className="results">
          <h2>{t("report.title", { name: formData.name })}</h2>
          <UserData userData={formData} />
          <BmiInterpretation formData={formData} />
          <IdealWeight formData={formData} />
          <BasalMetabolism formData={formData} />
          <CaloricRequirements formData={formData} />
          <MacronutrientsPerDay formData={formData} />
        </div>
      )}
    </div>
  );
}
