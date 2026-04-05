import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../App';
import { getUserFromId } from '../functions/functions';


export default function UserData() {
    const { t } = useTranslation();
    const { userData, setUserData } = useContext(UserContext);
    const selectedUser = getUserFromId(userData);
    
    
    if (!userData) {
        return <p>{t("userData.notAvailable")}</p>;
    }

    return (
        <div>
            <h3>{t("userData.title", { name: selectedUser.name })}</h3>
            <div className="row mb-2">
                <p className="col-md mb-3"><strong>{t("userData.age")}:</strong> {selectedUser.age} {t("userData.ageUnit")}</p>
                <p className="col-md mb-3"><strong>{t("userData.gender")}:</strong> {t(`common.genderOption.${selectedUser.gender}`)}</p>
            </div>
            <div className="row mb-2">
                <p className="col-md mb-3"><strong>{t("userData.height")}:</strong> {selectedUser.height} {t("userData.heightUnit")}</p>
                <p className="col-md mb-3"><strong>{t("userData.weight")}:</strong> {selectedUser.weight} {t("userData.weightUnit")}</p>
            </div>
            <div className="row mb-2">
                <p className="col-md mb-3"><strong>{t("userData.bodyType")}:</strong> {t(`common.bodyTypeOption.${selectedUser.bodyType}`)}</p>
                <p className="col-md mb-3"><strong>{t("activityTypes.title")}:</strong> {t(`activityTypes.${selectedUser.activityTypes}.description`)}</p>
            </div>
        </div>
    );
};
