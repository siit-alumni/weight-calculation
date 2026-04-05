import { useTranslation } from "react-i18next";
import { calcBasalMetabolism, calcCalorieConsumption, getUserFromId } from "../functions/functions";

export function CaloricRequirements({ formData }) {
  const selectedUser = getUserFromId(formData);
  const { weight, height, age, gender, bodyType, activityTypes } = selectedUser;
  const { t } = useTranslation();

  const basalMetabolism = calcBasalMetabolism(height, gender, bodyType, age);
  const caloricRequirements = calcCalorieConsumption(basalMetabolism, activityTypes);


  return (
    <div>
      <h3>{t("caloricRequirements.title")}</h3>
      <p>{t("caloricRequirements.description")}</p>
      <h5>{t("caloricRequirements.DCRLabel")}: {caloricRequirements.minCalories} - {caloricRequirements.maxCalories} kcal/day</h5>
    </div>
  );
}