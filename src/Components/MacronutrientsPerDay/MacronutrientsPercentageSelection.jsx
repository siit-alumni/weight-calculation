import { useTranslation } from "react-i18next";
import { settings } from "../Settings/settings";
import { useEffect, useState } from "react";

export function MacronutrientsPercentageSelection({ formData, getPercentages }) {
    const { t } = useTranslation();
    const bodyType = formData.bodyType;
    const perc = {
        protein: settings.recommendedMacronutrientPercentageIntake[bodyType].protein.max,
        carbs: settings.recommendedMacronutrientPercentageIntake[bodyType].carbs.max,
        fat: settings.recommendedMacronutrientPercentageIntake[bodyType].fat.max,
    }
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
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>{t("macronutrientsPercentageSelection.title")}</h3>
                <p>{t("macronutrientsPercentageSelection.description")} </p>
                <div className="row">
                    <div className="col-md mb-3">
                        <label htmlFor="proteinPercentage" className="form-label">
                            {t("macronutrientsPercentageSelection.proteinLabel")} 
                            {settings.recommendedMacronutrientPercentageIntake[bodyType].protein.min} 
                            - 
                            {settings.recommendedMacronutrientPercentageIntake[bodyType].protein.max}
                            %
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            name="protein"
                            id="proteinPercentage"
                            value={percentages.protein}
                            onChange={handleChange}
                            min={settings.recommendedMacronutrientPercentageIntake[bodyType].protein.min}
                            max={settings.recommendedMacronutrientPercentageIntake[bodyType].protein.max}
                            required
                        />
                    </div>
                    <div className="col-md mb-3">
                        <label htmlFor="carbsPercentage" className="form-label">
                            {t("macronutrientsPercentageSelection.carbsLabel")} 
                            {settings.recommendedMacronutrientPercentageIntake[bodyType].carbs.min} 
                            - 
                            {settings.recommendedMacronutrientPercentageIntake[bodyType].carbs.max}
                            %
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            name="carbs"
                            id="carbsPercentage"
                            value={percentages.carbs}
                            onChange={handleChange}
                            min={settings.recommendedMacronutrientPercentageIntake[bodyType].carbs.min}
                            max={settings.recommendedMacronutrientPercentageIntake[bodyType].carbs.max}
                            required
                        />
                    </div>
                    <div className="col-md mb-3">
                        <label htmlFor="fatPercentage" className="form-label">
                            {t("macronutrientsPercentageSelection.fatLabel")} 
                            {settings.recommendedMacronutrientPercentageIntake[bodyType].fat.max} 
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
                            min={settings.recommendedMacronutrientPercentageIntake[bodyType].fat.max}
                            max={settings.recommendedMacronutrientPercentageIntake[bodyType].fat.min}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    {t("macronutrientsPercentageSelection.submitButton")}
                </button>
            </form>
        </div>
    );
}