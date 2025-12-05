import { useState } from "react";
import { Form } from "../Form/Form";
import IdealWeight from "../IdealWeight/IdealWeight";
import { BmiInterpretation } from "../BmiInterpretation/BmiInterpretation";
import { calcBmi } from "../functions/functions";
import "./Report.css";
import UserData from "../UserData/UserData";
import { BasalMetabolism } from "../BasalMetabolism/BAsalMetabolism";
import { CaloricRequirements } from "../CaloricRequirements/CaloricRequirements";
import { useTranslation } from "react-i18next";

export function Report() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
    bodyType: "",
  });
  const [bmi, setBmi] = useState(null);

  function getDetails(data) {
    setFormData(data);
    setBmi(calcBmi(data.weight, data.height));
  }

  return (
    <div>
      <Form getDetails={getDetails} />
      {bmi && (
        <div className="results">
          <h2>{t("report.title", { name: formData.name })}</h2>
          <UserData userData={formData} />
          <BmiInterpretation bmi={bmi} name={formData.name} />
          <IdealWeight formData={formData} />
          <BasalMetabolism formData={formData} />
          <CaloricRequirements formData={formData} />
        </div>
      )}
    </div>
  );
}
