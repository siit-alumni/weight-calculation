import { useState } from "react";
import { Form } from "../Form/Form";
import { IdealBmi } from "../IdealBmi/IdealBmi";
import { BmiInterpretation } from "../BmiInterpretation/BmiInterpretation";
import { calcBmi } from "../functions/functions";
import "./CalcBmi.css";

export function CalcBmi() {
  const [bmi, setBmi] = useState(null);
  const [name, setName] = useState(null);

  function getDetails(weight, height) {
    const details = calcBmi(weight, height);
    setBmi(details);
  }

  function getName(name) {
    setName(name);
  }

  return (
    <div>
      <Form getDetails={getDetails} getName={getName} />
      {bmi && (
        <>
          <BmiInterpretation bmi={bmi} name={name} />
          <IdealBmi />
        </>
      )}
    </div>
  );
}
