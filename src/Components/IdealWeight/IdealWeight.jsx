import { useTranslation } from "react-i18next";
import { calcIdealWeight, getUserFromId } from "../functions/functions";


export default function IdealWeight({formData}) {
        const selectedUser = getUserFromId(formData);
  const { weight, height, gender, bodyType, age } = selectedUser;
  const { t } = useTranslation();

  let idealWeight = calcIdealWeight(height, gender, bodyType, age);

  return (
    <div>
      <h3>{t("idealWeight.title")}</h3>
      <p>{t("idealWeight.description")}</p>
      <h5>{t("idealWeight.title")}: {idealWeight} kg</h5>
    </div>
  );
}
