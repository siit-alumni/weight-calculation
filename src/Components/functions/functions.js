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

  let caloriesRange = {minCalories, maxCalories};

  return caloriesRange;
}

export function calcMacronutrientsCalories(calories, macronutrientPercentages) {
  const carbsCalories = calories * macronutrientPercentages.carbs / 100;
  const proteinCalories = calories * macronutrientPercentages.protein / 100;
  const fatCalories = calories * macronutrientPercentages.fat / 100;   

  return {
    carbsCalories,
    proteinCalories,
    fatCalories
  };
}

export function calcMacronutrientsGrams(macronutrientsCalories) {
  const {carbsCalories, proteinCalories, fatCalories} = macronutrientsCalories; 
  const carbsGrams = Math.round(carbsCalories / settings.macronutrientDistribution.carbs);
  const proteinGrams = Math.round(proteinCalories / settings.macronutrientDistribution.protein);
  const fatGrams = Math.round(fatCalories / settings.macronutrientDistribution.fat);   
  return {
    carbsGrams,
    proteinGrams,
    fatGrams
  };
}

export function getUserDataFromLocalStorage() {
  const userData = localStorage.getItem("userData");
  return userData ? JSON.parse(userData) : settings.defaultUser;
}

export function saveUserDataToLocalStorage(userData) {
  localStorage.setItem("userData", JSON.stringify(userData));
}

export function clearUserDataFromLocalStorage() {
  localStorage.setItem("userData", JSON.stringify(settings.defaultUser));
}