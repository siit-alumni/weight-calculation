import React from "react";
import { useTranslation } from "react-i18next";

export default function FoodTableFavourites({
  showFavourites,
  setShowFavourites,
  className = "btn btn-outline-secondary mb-3",
  disabled = false,
}) {
  const { t } = useTranslation();

  const handleToggle = () => {
    if (setShowFavourites) {
      setShowFavourites(!showFavourites);
    }
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleToggle}
      disabled={disabled}
      aria-pressed={Boolean(showFavourites)}
      aria-label={showFavourites ? "Hide favorite foods" : "Show favorite foods"}
      title={showFavourites ? "Hide favorite foods" : "Show favorite foods"}
    >
      {showFavourites ? t("foodTable.hideFavourites") || "Hide favorites" : t("foodTable.showFavourites") || "Show favorites"}
    </button>
  );
}
