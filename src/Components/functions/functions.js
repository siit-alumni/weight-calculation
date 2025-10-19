import { settings, bodyTypeCoeff } from "../Settings/Settings";


export function calcBmi(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
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
  return (height - 100 + age / 10) * bodyTypeCoefficient(bodyType);
}


export function bodyTypeCoefficient(bodyType) {
  for (const key in bodyTypeCoeff) {  
      if (key === bodyType) {
        return bodyTypeCoeff[key];
      }
    }
}

