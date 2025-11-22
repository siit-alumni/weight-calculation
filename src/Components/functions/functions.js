import { settings } from "../Settings/settings";


export function calcBmi(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}


export function bmiInterpretation(bmi) {

  for (const key in settings.bodyEvaluation) {
    const [min, max] = settings.bodyEvaluation[key];
    if (Number(bmi) >= min && Number(bmi) < max) {

      return key;
    }
  }
}


export function calcIdealWeight(height, gender, bodyType, age) {
  return (height - 100 + age / 10) * settings.genderCoefficient[gender] * bodyTypeCoefficient(bodyType);
}


export function bodyTypeCoefficient(bodyType) {
  for (const key in settings.bodyTypeCoeff) {
      if (key === bodyType) {
        return settings.bodyTypeCoeff[key];
      }
    }
}

export function calcBasalMetabolism(weight, height, age, gender) {
  if (gender === "male") {
    return Math.round(88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age));
  } else {
    return Math.round(447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age));
  }   
}

export function calcCalorieConsumption(basalMetabolism, activityLevel) {}
