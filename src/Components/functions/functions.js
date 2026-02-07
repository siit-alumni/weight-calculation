import { settings } from "../Settings/settings";


export function calcBmi(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}


export function bmiInterpretation(bmi) {

  for (const key in settings.bodyEvaluation) {
    const { min, max } = settings.bodyEvaluation[key];
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
  return Math.round(calcIdealWeight(height, gender, bodyType, age) * 24);
}

export function calcCalorieConsumption(basalMetabolism, activityTypes) {
  const { min: minLevel, max: maxLevel } = settings.calorieConsumptionLevels[activityTypes];

  const minCalories = Math.round(basalMetabolism + (minLevel * 24));
  const maxCalories = Math.round(basalMetabolism + (maxLevel * 24));

  let caloriesRange = { minCalories, maxCalories };

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
  const { carbsCalories, proteinCalories, fatCalories } = macronutrientsCalories;
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

export function clearUserDataFromLocalStorage() {
  localStorage.setItem("userData", JSON.stringify(settings.defaultUser));
}

export function saveUserDataToLocalStorage(userData) {
  localStorage.setItem("userData", JSON.stringify(userData));
}

export function getUsersFromLocalStorage(){
  const users = localStorage.getItem("WeightCalculatorApp");
  return users ? JSON.parse(users) : { profiles: [] };
}

export function saveUsersToLocalStorage(users){
  const usersData = { profiles: users };
  localStorage.setItem('WeightCalculatorApp', JSON.stringify(usersData));
}

export function addNewUserToLocalStorage(user){
  const usersData = getUsersFromLocalStorage();
  usersData.profiles.push(user);
  localStorage.setItem('WeightCalculatorApp', JSON.stringify(usersData));
}

export function deleteUserFromLocalStorage(user){
  const usersData = getUsersFromLocalStorage();
  const filteredUsers = usersData.profiles.filter(profile => profile.id !== user.id);
  const newUsersData = { profiles: filteredUsers };
  localStorage.setItem('WeightCalculatorApp', JSON.stringify(newUsersData));
}

export function updateUserInLocalStorage(user){
  const usersData = getUsersFromLocalStorage();
  const index = usersData.profiles.findIndex(profile => profile.id === user.id);
  user.id = user.name;
  usersData.profiles[index] = user;
  localStorage.setItem('WeightCalculatorApp', JSON.stringify(usersData));
}

export function findUserInLocalStorage(userId){
  const usersData = getUsersFromLocalStorage();
  const index = usersData.profiles.findIndex(profile => profile.id === userId);
  return usersData.profiles[index];
}

export function sortUsersAlphabetically() {
  const usersData = getUsersFromLocalStorage();
  const users = usersData.profiles;
  users.sort((a, b) => a.name < b.name ? -1 : 1);

  return users;
}


export function checkDefaultPercentages(bodyType, percentages) {
  const defaultPercentages = getDefaultMacronutrientsPerBodyType(bodyType);
  return (
    percentages.protein === defaultPercentages.protein &&
    percentages.carbs === defaultPercentages.carbs &&
    percentages.fat === defaultPercentages.fat
  );
}

// export function addMacronutrientsToFormData(formData) {
//   formData.macronutrientsPercentages.endomorph = getDefaultMacronutrientsPerBodyType(endomorph);
//   formData.macronutrientsPercentages.mesomorph = getDefaultMacronutrientsPerBodyType(mesomorph);
//   formData.macronutrientsPercentages.ectomorph = getDefaultMacronutrientsPerBodyType(ectomorph);
// }

export function getDefaultMacronutrientsPerBodyType(bodyType) {
    const percentages = {
    protein: settings.recommendedMacronutrientPercentageIntake[bodyType].protein.max,
    carbs: settings.recommendedMacronutrientPercentageIntake[bodyType].carbs.max,
    fat: settings.recommendedMacronutrientPercentageIntake[bodyType].fat.max,
  }
  return percentages;
}