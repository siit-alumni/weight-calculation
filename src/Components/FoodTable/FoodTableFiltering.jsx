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
    const displayedCategories = selectedCategories.includes("all")
        ? categoryOptions.slice(1)
        : selectedCategories;

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

    // const handleSubGroupChange = (subgroup) => {
    //     setSelectedSubGroup(subgroup);

    // }

    useEffect(() => {
        const filtered = Object.entries(foodList).filter(([, foodInfo]) =>
            (selectedCategories.includes("all") || selectedCategories.includes(foodInfo["Category"])) &&
            (selectedSubGroup === "all" || foodInfo["Subgroup"] === selectedSubGroup)
        );

        onFilteredFoodChange(Object.fromEntries(filtered));
    }, [foodList, selectedCategories, selectedSubGroup, onFilteredFoodChange]);


    return (
        <div className="pb-4 d-flex flex-row align-items-md-center justify-content-md-center gap-4">
            <div className="d-flex flex-row gap-3 ">
                <div className="fw-bold">
                    {t("foodDB.category.title")}
                </div>

                <div className="d-flex flex-row  ">
                    {categoryOptions.map((category) => (
                        <label key={category} className="d-flex align-items-center mb-1 me-2">
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
            </div>
            <div className="d-flex ms-4 gap-2">
                {/* <div className="fw-bold">
                    {t("foodDB.subgroup.title")}
                </div> */}

                <div className="d-flex flex-row gap-3">
                    <div className="btn-group dropdown">
                        <button className="btn fw-bold dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {t("foodDB.subgroup.title")}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            {subgroupOptions.map((subgroup) => (
                                <button
                                    key={subgroup}
                                    type="button"
                                    className={`dropdown-item${selectedSubGroup === subgroup ? " active" : ""}`}
                                    onClick={() => {
                                        setSelectedSubGroup(subgroup);
                                        subGroupFilterRef.current.open = false;
                                        // handleSubGroupChange(subgroup);
                                    }}
                                >
                                    {subgroup === "all" ? t("foodTable.all") : t(`foodDB.subgroup.${subgroup}`)}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}