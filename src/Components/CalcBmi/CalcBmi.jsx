import { useState } from "react";
import { Form } from "../FormData/FormData";
import { ShowBMI } from "../ShowBmi/ShowBmi";
import { IdealBmi } from "../IdealBmi/IdealBmi";
import "./CalcBmi.css";

export function CalcBmi() {
  const [bmi, setBmi] = useState(null);

  function calcBmi(weight, height) {
    const newHeight = height / 100;
    setBmi((weight / (newHeight * newHeight)).toFixed(2));
  }

  return (
    <div>
      <Form onCalculate={calcBmi} />
      {bmi && (
        <>
          <ShowBMI bmi={bmi} />
          <IdealBmi bmi={bmi} />
        </>
      )}
    </div>
  );
}
