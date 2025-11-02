import { useTranslation } from "react-i18next";
import { bmiInterpretation } from "../functions/functions";
import "./BmiInterpretation.css";


export function BmiInterpretation({ bmi, name }) {
  const message = bmiInterpretation(bmi);
  const { t } = useTranslation();

  return (
    <div className="bmi-interpretation">
      <h2>{t("bmiInterpretation.title", { name })}</h2>
      <h3>{t("bmiInterpretation.bmiLabel")}: {bmi}</h3>
      <h3>{t("bmiInterpretation.evaluationLabel")}: {t(`bmiInterpretation.evaluationValue.${message}`)}</h3>
    </div>
  );
}
