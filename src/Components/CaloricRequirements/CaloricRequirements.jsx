import { useTranslation } from "react-i18next"; 
import { calcCaloricRequirements} from "../functions/functions";

export function CaloricRequirements({ formData }) {
  const { weight, height, age, gender } = formData;
  const { t } = useTranslation();       
  const basalMetabolism = calcBasalMetabolism(weight, height, age, gender);
    const caloricRequirements = calcCaloricRequirements(basalMetabolism, gender);
    return (
      <div>
        <h5>{t("caloricRequirements.title")}: {caloricRequirements} kcal/day</h5>
      </div>
    );
}