import { useTranslation } from "react-i18next";
import { calcBasalMetabolism, calcCalorieConsumption, calcIdealWeight, calcMacronutrientsCalories, calcMacronutrientsGrams } from "../functions/functions";

export default function MacronutrientsPerDay({ formData, macronutrientPercentages }) {
  const { weight, height, gender, bodyType, age, activityTypes } = formData;
  const { t } = useTranslation();

  const basalMetabolism = calcBasalMetabolism(height, gender, bodyType, age);
  const { minCalories, maxCalories } = calcCalorieConsumption(basalMetabolism, activityTypes);
  const minMacronutrientsCalories = calcMacronutrientsCalories(minCalories, macronutrientPercentages);
  const maxMacronutrientsCalories = calcMacronutrientsCalories(maxCalories, macronutrientPercentages);
  const minMacronutrientsGrams = calcMacronutrientsGrams(minMacronutrientsCalories);
  const maxMacronutrientsGrams = calcMacronutrientsGrams(maxMacronutrientsCalories);

  return (
    <div>
      <h3>{t("macronutrientsPerDay.title")}</h3>
      <p>{t("macronutrientsPerDay.description")}</p>
      <div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th></th>
              <th>{t("common.Macronutrients.protein")}</th>
              <th>{t("common.Macronutrients.carbs")}</th>
              <th>{t("common.Macronutrients.fat")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t("common.measurement.caloricUnit")}</td>
              <td>{minMacronutrientsCalories.proteinCalories} - {maxMacronutrientsCalories.proteinCalories} </td>
              <td>{minMacronutrientsCalories.carbsCalories} - {maxMacronutrientsCalories.carbsCalories} </td>
              <td>{minMacronutrientsCalories.fatCalories} - {maxMacronutrientsCalories.fatCalories} </td>
            </tr>
            <tr>
              <td>{t("common.measurement.weightUnit")}</td>
              <td>{minMacronutrientsGrams.proteinGrams} - {maxMacronutrientsGrams.proteinGrams} </td>
              <td>{minMacronutrientsGrams.carbsGrams} - {maxMacronutrientsGrams.carbsGrams} </td>
              <td>{minMacronutrientsGrams.fatGrams} - {maxMacronutrientsGrams.fatGrams} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
