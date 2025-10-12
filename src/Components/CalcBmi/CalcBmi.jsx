import { useState } from "react";
import { Form } from "../Form/Form";
import IdealWeight from "../IdealWeight/IdealWeight";
import { BmiInterpretation } from "../BmiInterpretation/BmiInterpretation";
import { calcBmi } from "../functions/functions";
import "./CalcBmi.css";

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
        <>
          <BmiInterpretation bmi={bmi} name={formData.name} />
          <IdealWeight formData={formData} />
          {/* <IdealWeight></IdealWeight> */}
        </>
      )}
    </div>
  );
}
