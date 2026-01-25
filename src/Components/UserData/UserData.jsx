import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../App';


export default function UserData() {
    const { t } = useTranslation();
const { userData, setUserData } = useContext(UserContext);
    if (!userData) {
        return <p>{t("userData.notAvailable")}</p>;
    }


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
