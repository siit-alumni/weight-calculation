import { settings, bodyTypeCoeff } from "../Settings/Settings";

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

export function calcIdealWeight(height, gender, bodyType, age) {
  let idealWeight;

  idealWeight = (height - 100 + age / 10) * bodyTypeCoefficient(bodyType);
  
  return idealWeight;
}

export function bodyTypeCoefficient(bodyType) {
  let coefficient;

for (const key in bodyTypeCoeff) {  
    if (key === bodyType) {
      coefficient = bodyTypeCoeff[key];
      break;
    }
  }

  return coefficient;
}
