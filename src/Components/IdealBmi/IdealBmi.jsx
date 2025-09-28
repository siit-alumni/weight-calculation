import { settings } from "../Settings/Settings";

export function IdealBmi({ bmi }) {
  let message = "";
  console.log(bmi);
  for (const key in settings) {
    const [min, max, text] = settings[key];
    console.log(text);
    if (Number(bmi) >= min && Number(bmi) < max) {
      message = text;
      break;
    }
  }

  return <h3>Interpretare: {message}</h3>;
}
