import { settings } from "../Settings/Settings";

export function IdealBmi({ bmi }) {
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
      <h3>Interpretare: {message}</h3>
    </div>
  );
}
