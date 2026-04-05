import { useTranslation } from "react-i18next";
import { bmiInterpretation, calcBmi, getUserFromId } from "../functions/functions";
import "./BmiInterpretation.css";


export function BmiInterpretation({ formData }) {
  const selectedUser = getUserFromId(formData);
  const bmi = calcBmi(selectedUser.weight, selectedUser.height)
  const message = bmiInterpretation(bmi);
  const { t } = useTranslation();

  return (
    <div className="bmi-interpretation">
      <h3>{t("bmiInterpretation.title")}</h3>
      <p>{t("bmiInterpretation.description")}</p>
      <h5>{t("bmiInterpretation.bmiLabel")}: {bmi}</h5>
      <h5>{t("bmiInterpretation.evaluationLabel")}: {t(`bmiInterpretation.evaluationValue.${message}`)}</h5>
    </div>
  );
}
