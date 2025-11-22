import { useState } from "react";
import { Form } from "../Form/Form";
import IdealWeight from "../IdealWeight/IdealWeight";
import { BmiInterpretation } from "../BmiInterpretation/BmiInterpretation";
import { calcBmi } from "../functions/functions";
import "./CalcBmi.css";
import UserData from "../UserData/UserData";
import { BasalMetabolism } from "../BasalMetabolism/BAsalMetabolism";

export function CalcBmi() {
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
          <UserData userData={formData} />
          <BmiInterpretation bmi={bmi} name={formData.name} />
          <IdealWeight formData={formData} />
          <BasalMetabolism formData={formData} />
        </div>
      )}
    </div>
  );
}
