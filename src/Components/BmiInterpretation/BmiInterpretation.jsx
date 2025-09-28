import { settings } from "../Settings/Settings";

export function BmiInterpretation({ bmi, name }) {
  let message = "";
  for (const key in settings) {
    const [min, max, text] = settings[key];
    if (Number(bmi) >= min && Number(bmi) < max) {
      message = text;
      break;
    }
  }

  return (
    <div>
      <h3>Raport complet {name}:</h3>
      <h3>IMC: {bmi}</h3>
      <h3>Evaluare: {message}</h3>
    </div>
  );
}
