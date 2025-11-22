import React from "react";
import { useTranslation } from "react-i18next";
import { calcBasalMetabolism } from "../functions/functions";

export function BasalMetabolism({ formData }) {
    const { weight, height, age, gender, bodyType } = formData;
    const { t } = useTranslation();
    const basalMetabolism = calcBasalMetabolism(height, gender, bodyType, age);
    return (
        <div>
            <h5>{t("basalMetabolism.title")}: {basalMetabolism} kcal/day</h5>
        </div>
    );
}