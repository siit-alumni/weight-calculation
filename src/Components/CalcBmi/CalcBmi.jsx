import { useState } from "react";
import "./CalcBmi.css";

export function CalcBmi() {
  const [bmi, setBmi] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const calc_bmi = (weight, height) => {
    const new_height = height / 100;
    setBmi((weight / (new_height * new_height)).toFixed(2));
  };

  const handleShow = () => {
    setShowResult(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { weight, height } = Object.fromEntries(new FormData(e.target));
    calc_bmi(weight, height);
    handleShow();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="weight">Introdu Greutatea (kg)</label>
          <input type="number" name="weight" id="weight" placeholder="Greutate în kg" />
        </div>
        <div>
          <label htmlFor="height">Introdu Inălțimea (cm)</label>
          <input type="number" name="height" id="height" placeholder="Înalțime în cm" />
        </div>

        <button type="submit">Calculează IMC</button>
      </form>
      {showResult && <h2>IMC: {bmi}</h2>}
    </div>
  );
}
