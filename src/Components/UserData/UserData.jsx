import { useTranslation } from 'react-i18next';


export default function UserData({ userData }) {
    if (!userData) {
        return <p>No user data available.</p>;
    }
    const { t } = useTranslation();

    return (
        <div>
            <h3>{t("userData.title", { name: userData.name })}</h3>
            <div className="row mb-2">
                <p className="col-md mb-3"><strong>{t("userData.age")}:</strong> {userData.age} {t("userData.ageUnit")}</p>
                <p className="col-md mb-3"><strong>{t("userData.gender")}:</strong> {t(`common.genderOption.${userData.gender}`)}</p>
            </div>
            <div className="row mb-2">
                <p className="col-md mb-3"><strong>{t("userData.height")}:</strong> {userData.height} {t("userData.heightUnit")}</p>
                <p className="col-md mb-3"><strong>{t("userData.weight")}:</strong> {userData.weight} {t("userData.weightUnit")}</p>
            </div>
            <div className="row mb-2">
                <p className="col-md mb-3"><strong>{t("userData.bodyType")}:</strong> {t(`common.bodyTypeOption.${userData.bodyType}`)}</p>
                <p className="col-md mb-3"><strong>{t("activityTypes.title")}:</strong> {t(`activityTypes.${userData.activityTypes}.description`)}</p>
            </div>
        </div>
    );
};
