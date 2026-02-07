import { useTranslation } from "react-i18next";
import { settings } from "../Settings/settings";
import { useEffect, useState } from "react";
import { checkDefaultPercentages, clearMacronutrientsPercentagesFromLocalStorage, getMacronutrientsPercentagesFromLocalStorage, saveMacronutrientsPercentagesToLocalStorage } from "../functions/functions";

export function MacronutrientsPercentageSelection({ formData, getPercentages }) {
    const { t } = useTranslation();
    const bodyType = formData.bodyType;
    const perc = getMacronutrientsPercentagesFromLocalStorage(bodyType);
    const [percentages, setPercentages] = useState(perc);

    useEffect(() => {
        setPercentages(perc);
    }, [bodyType]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPercentages((prev) => ({
            ...prev,
            [name]: Number(value),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const totalPercentages = percentages.protein + percentages.carbs + percentages.fat;
        if (totalPercentages !== 100) {
            alert(t("macronutrientsPercentageSelection.errorMessage"));
            return;
        }
        getPercentages(percentages);
        saveMacronutrientsPercentagesToLocalStorage(bodyType, percentages);
    };

    const handleReset = (e) => {
        e.preventDefault();
        clearMacronutrientsPercentagesFromLocalStorage(bodyType);
        setPercentages(getMacronutrientsPercentagesFromLocalStorage(bodyType));
        getPercentages(null);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>{t("macronutrientsPercentageSelection.title")}</h3>
                <p>{t("macronutrientsPercentageSelection.description")} </p>
                <div className="row">
                    <div className="col-md mb-4">
                        <label htmlFor="proteinPercentage" className="form-label">
                            {t("macronutrientsPercentageSelection.proteinLabel")}
                            {settings.recommendedMacronutrientPercentageIntake[bodyType].protein.min}
                            -
                            <strong>{settings.recommendedMacronutrientPercentageIntake[bodyType].protein.max}</strong> %
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            name="protein"
                            id="proteinPercentage"
                            onChange={handleChange}
                            // min={settings.recommendedMacronutrientPercentageIntake[bodyType].protein.min}
                            // max={settings.recommendedMacronutrientPercentageIntake[bodyType].protein.max}
                            value={percentages.protein}
                            required
                        />
                    </div>

                    <div className="col-md mb-4">
                        <label htmlFor="carbsPercentage" className="form-label">
                            {t("macronutrientsPercentageSelection.carbsLabel")}
                            {settings.recommendedMacronutrientPercentageIntake[bodyType].carbs.min}
                            -
                            <strong>{settings.recommendedMacronutrientPercentageIntake[bodyType].carbs.max} </strong>
                            %
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            name="carbs"
                            id="carbsPercentage"
                            value={percentages.carbs}
                            onChange={handleChange}
                            // min={settings.recommendedMacronutrientPercentageIntake[bodyType].carbs.min}
                            // max={settings.recommendedMacronutrientPercentageIntake[bodyType].carbs.max}
                            required
                        />
                    </div>
                    <div className="col-md mb-4">
                        <label htmlFor="fatPercentage" className="form-label">
                            {t("macronutrientsPercentageSelection.fatLabel")}
                            <strong>{settings.recommendedMacronutrientPercentageIntake[bodyType].fat.max}</strong>
                            -
                            {settings.recommendedMacronutrientPercentageIntake[bodyType].fat.min} %
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            name="fat"
                            id="fatPercentage"
                            value={percentages.fat}
                            onChange={handleChange}
                            // min={settings.recommendedMacronutrientPercentageIntake[bodyType].fat.max}
                            // max={settings.recommendedMacronutrientPercentageIntake[bodyType].fat.min}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    {t("macronutrientsPercentageSelection.submitButton")}
                </button>
            </form>

            {!checkDefaultPercentages(bodyType, percentages) && (
                <button className="btn btn-secondary" onClick={handleReset}>{t("macronutrientsPercentageSelection.resetButton")}</button>
            )}

        </div>
    );
}