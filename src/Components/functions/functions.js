import { settings, bodyTypeCoeff } from "../Settings/settings";


export function calcBmi(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}


export function bmiInterpretation(bmi) {

  for (const key in settings) {
    const [min, max] = settings[key];
    if (Number(bmi) >= min && Number(bmi) < max) {

      return key;
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

