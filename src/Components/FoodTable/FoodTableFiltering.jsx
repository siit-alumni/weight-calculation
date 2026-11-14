import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function FoodTableFiltering({ foodList, onFilteredFoodChange }) {
    const { t } = useTranslation();
    const [selectedSubGroup, setSelectedSubGroup] = useState("all");
    const [selectedCategories, setSelectedCategories] = useState(["all"]);
    const subGroupFilterRef = useRef(null);
    const vectorList = Object.entries(foodList);
    const categoryOptions = [];
    const subgroupOptions = [];

    for (const [, foodInfo] of vectorList) {
        const category = foodInfo["Category"];
        const subgroup = foodInfo["Subgroup"];

        if (category && !categoryOptions.includes(category)) {
            categoryOptions.push(category);
        }

        if (subgroup && !subgroupOptions.includes(subgroup)) {
            subgroupOptions.push(subgroup);
        }
    }

    categoryOptions.sort((a, b) => a.localeCompare(b));
    subgroupOptions.sort((a, b) =>
        t(`foodDB.subgroup.${a}`).localeCompare(
            t(`foodDB.subgroup.${b}`)
        ));
    categoryOptions.unshift("all");
    subgroupOptions.unshift("all");

    const toggleCategory = (category) => {
        setSelectedCategories((current) => {
            const allCategories = categoryOptions.filter((option) => option !== "all");
            if (category === "all") {
                const allSelected = current.includes("all") ||
                    allCategories.every((value) => current.includes(value));
                return allSelected ? [] : allCategories;
            }

            const selected = current.includes("all") ? allCategories : current;
            const updated = selected.includes(category)
                ? selected.filter((value) => value !== category)
                : [...selected, category];

            return updated;
        });

    };

    const handleSubGroupChange = (subgroup) => {
        setSelectedSubGroup(subgroup);

    }

    useEffect(() => {
        const filtered = Object.entries(foodList).filter(([, foodInfo]) =>
            (selectedCategories.includes("all") || selectedCategories.includes(foodInfo["Category"])) &&
            (selectedSubGroup === "all" || foodInfo["Subgroup"] === selectedSubGroup)
        );

        onFilteredFoodChange(Object.fromEntries(filtered));
    }, [foodList, selectedCategories, selectedSubGroup, onFilteredFoodChange]);


    return (
        <div className="pb-4 flex-inline d-flex align-items-md-center ">
            <div>
                {t("foodDB.category.title")}
                <details className="d-inline-block ms-2 position-relative">
                    <summary style={{ cursor: "pointer" }}>
                        {selectedCategories.join(", ")}
                    </summary>
                    <div className="position-absolute bg-white border rounded shadow-sm p-2"
                        style={{ zIndex: 10, minWidth: "max-content", maxHeight: "200px", overflowY: "auto" }}>
                        {categoryOptions.map((category) => (
                            <label key={category} className="d-flex align-items-center gap-2 mb-1">
                                <input
                                    type="checkbox"
                                    checked={
                                        category === "all"
                                            ? selectedCategories.includes("all") ||
                                                categoryOptions.slice(1).every((value) => selectedCategories.includes(value))
                                            : selectedCategories.includes("all") || selectedCategories.includes(category)
                                    }
                                    onChange={() => toggleCategory(category)}
                                />
                                {category === "all" ? t("foodTable.all") : category}
                            </label>
                        ))}
                    </div>
                </details>
            </div>
            <div className="ms-4">
                {t("foodDB.subgroup.title")}

                <details
                    ref={subGroupFilterRef}
                    className="d-inline-block ms-2 position-relative"
                >
                    <summary
                        style={{ cursor: "pointer" }}>
                        {t(`foodDB.subgroup.${selectedSubGroup}`)}
                    </summary>
                    <div
                        className="position-absolute bg-white border rounded shadow-sm p-2"
                        style={{ zIndex: 10, minWidth: "max-content", maxHeight: "200px", overflowY: "auto" }}
                    >
                        {subgroupOptions.map((subgroup) => (
                            <button
                                key={subgroup}
                                type="button"
                                className={`dropdown-item${selectedSubGroup === subgroup ? " active" : ""}`}
                                onClick={() => {
                                    setSelectedSubGroup(subgroup);
                                    subGroupFilterRef.current.open = false;
                                    handleSubGroupChange(subgroup);
                                }}
                            >
                                {subgroup === "all" ? t("foodTable.all") : t(`foodDB.subgroup.${subgroup}`)}
                            </button>
                        ))}
                    </div>
                </details>
            </div>
        </div>
    );
}