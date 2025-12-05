import { useTranslation } from 'react-i18next';


export default function UserData({ userData }) {
    if (!userData) {
        return <p>No user data available.</p>;
    }
  const { t } = useTranslation();
  
    return (
        <div>
            <h3>{t("userData.title", { name: userData.name })}</h3>
            <p><strong>{t("userData.age")}:</strong> {userData.age} {t("userData.ageUnit")}</p>
            <p><strong>{t("userData.height")}:</strong> {userData.height} {t("userData.heightUnit")}</p>
            <p><strong>{t("userData.weight")}:</strong> {userData.weight} {t("userData.weightUnit")}</p>
            <p><strong>{t("userData.gender")}:</strong> {t(`common.genderOption.${userData.gender}`)}</p>
            <p><strong>{t("userData.bodyType")}:</strong> {t(`common.bodyTypeOption.${userData.bodyType}`)}</p>
        </div>
    );
};
