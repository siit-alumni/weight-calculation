import { useTranslation } from "react-i18next";
import { calcIdealWeight } from "../functions/functions";


export default function IdealWeight({formData}) {
  const { weight, height, gender, bodyType, age } = formData;
  const { t } = useTranslation();

  let idealWeight = calcIdealWeight(height, gender, bodyType, age);

  return (
    <div>
      <h5>{t("idealWeight.title")}: {idealWeight} kg</h5>
    </div>
  );
}
