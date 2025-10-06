import { settings } from "../Settings/Settings";

export function calcBmi(weight, height) {
  const newHeight = height / 100;
  return (weight / (newHeight * newHeight)).toFixed(2);
}

export function bmiInterpretation(bmi) {
  let message = "";
  for (const key in settings) {
    const [min, max, text] = settings[key];
    if (Number(bmi) >= min && Number(bmi) < max) {
      message = text;
      return message;
    }
  }
}
