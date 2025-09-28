import { useState } from "react";
import { Form } from "../FormData/Form";
import { ShowBMI } from "../ShowBmi/ShowBmi";
import { IdealBmi } from "../IdealBmi/IdealBmi";
import "./CalcBmi.css";

export function CalcBmi() {
  const [bmi, setBmi] = useState(null);
  const [name, setName] = useState(null);

  function calcBmi(weight, height) {
    const newHeight = height / 100;
    setBmi((weight / (newHeight * newHeight)).toFixed(2));
  }

  function getName(name) {
    setName(name);
  }

  return (
    <div>
      <Form onCalculate={calcBmi} getName={getName} />
      {bmi && (
        <>
          <ShowBMI bmi={bmi} name={name} />
          <IdealBmi bmi={bmi} />
        </>
      )}
    </div>
  );
}
