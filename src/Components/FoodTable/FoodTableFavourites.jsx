import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../App";
import { getUserFromId } from "../functions/functions";

export default function FoodTableFavourites({
  showFavourites,
  setShowFavourites,
  onFavouriteFoodChange,
  foodList,
  className = "btn btn-outline-secondary mb-3",
  disabled = false,
}) {

  const { t } = useTranslation();
  const { userData } = useContext(UserContext);
  const selectedUser = getUserFromId(userData);
  const userFavorites = Object.fromEntries(
    (Array.isArray(selectedUser?.favorites) ? selectedUser.favorites : [])
      .map((foodName) => [foodName, true])
  );

  const handleToggle = () => {
    const nextShowFavourites = !showFavourites;
    setShowFavourites(nextShowFavourites);

    const visibleFoodList = nextShowFavourites
      ? Object.fromEntries(
          Object.entries(foodList).filter(([foodName]) => userFavorites[foodName])
        )
      : foodList;
    onFavouriteFoodChange(visibleFoodList);
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleToggle}
      disabled={disabled}
      aria-pressed={Boolean(showFavourites)}
      aria-label={showFavourites ? "Hide favorite foods" : "Show favorite foods"}
      title={showFavourites ? t("foodTable.hideFavourites") : t("foodTable.showFavourites")}
    >
      {showFavourites ? t("foodTable.hideFavourites") : t("foodTable.showFavourites")}
    </button>
  );
}
