import { bmiInterpretation } from "../functions/functions";

export function BmiInterpretation({ bmi, name }) {
  const message = bmiInterpretation(bmi);

  return (
    <div>
      <h3>Raport complet {name}:</h3>
      <h3>IMC: {bmi}</h3>
      <h3>Evaluare: {message}</h3>
    </div>
  );
}
