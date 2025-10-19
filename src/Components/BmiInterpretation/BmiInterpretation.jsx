import { bmiInterpretation } from "../functions/functions";
import "./BmiInterpretation.css";

export function BmiInterpretation({ bmi, name }) {
  const message = bmiInterpretation(bmi);

  return (
    <div className="bmi-interpretation">
      <h2>Raport complet {name}:</h2>
      <h3>IMC: {bmi}</h3>
      <h3>Evaluare: {message}</h3>
    </div>
  );
}
