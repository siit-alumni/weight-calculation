import { settings } from "../Settings/settings";


export function calcBmi(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}


export function bmiInterpretation(bmi) {

  for (const key in settings.bodyEvaluation) {
    const {min, max} = settings.bodyEvaluation[key];
    if (Number(bmi) >= min && Number(bmi) < max) {

      return key;
    }
  }
}


export function calcIdealWeight(height, gender, bodyType, age) {
  return Number(((height - 100 + age / 10) * settings.genderCoefficient[gender] * bodyTypeCoefficient(bodyType)).toFixed(2));
}


export function bodyTypeCoefficient(bodyType) {
  for (const key in settings.bodyTypeCoeff) {
      if (key === bodyType) {
        return settings.bodyTypeCoeff[key];
      }
    }
}


export function calcBasalMetabolism(height, gender, bodyType, age) {
  return Math.round(calcIdealWeight(height, gender, bodyType, age)*24)  ;
}

export function calcCalorieConsumption(basalMetabolism, activityTypes) {
  const {min: minLevel, max: maxLevel} = settings.calorieConsumptionLevels[activityTypes];
  
  const minCalories = Math.round(basalMetabolism + (minLevel* 24));
  const maxCalories = Math.round(basalMetabolism + (maxLevel * 24));

  return [minCalories, maxCalories];
}
