import { useTranslation } from "react-i18next"; 
import { calcBasalMetabolism, calcCalorieConsumption} from "../functions/functions";

export function CaloricRequirements({ formData }) {
  const { weight, height, age, gender, bodyType, activityTypes } = formData;
  const { t } = useTranslation();       
  
  const basalMetabolism = calcBasalMetabolism(height, gender, bodyType, age);
    const caloricRequirements = calcCalorieConsumption(basalMetabolism, activityTypes);
    return (
      <div>
        <h5>{t("caloricRequirements.title")}: {caloricRequirements[0]} - {caloricRequirements[1]} kcal/day</h5>
      </div>
    );
}