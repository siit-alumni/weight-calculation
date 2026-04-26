import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../App';


export default function UserData() {
    const { t } = useTranslation();
    const { userData, setUserData } = useContext(UserContext);

    // console.log("UserData component :", userData);
    
    if (!userData) {
        return <p>{t("userData.notAvailable")}</p>;
    }

    return (
        <div className="mt-4">
            <h3>{t("userData.title", { name: userData.name })}</h3>
            <div className="row mb-2">
                <div className="col-md-4 p-2">
                    <div className='border rounded p-2'>
                        <h4 className="lead">{t("userData.age")}:</h4>
                        {userData.age} {t("userData.ageUnit")}
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <div className='border rounded p-2'>
                        <h4 className="lead">{t("userData.gender")}:</h4>
                        {t(`common.genderOption.${userData.gender}`)}
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <div className='border rounded p-2'>
                        <h4 className="lead">{t("userData.height")}:</h4>
                        {userData.height} {t("userData.heightUnit")}
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <div className='border rounded p-2'>
                        <h4 className="lead">{t("userData.weight")}:</h4>
                        {userData.weight} {t("userData.weightUnit")}
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <div className='border rounded p-2'>
                        <h4 className="lead">{t("userData.bodyType")}:</h4>
                        {t(`common.bodyTypeOption.${userData.bodyType}`)}
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <div className='border rounded p-2'>
                        <h4 className="lead">{t("activityTypes.title")}:</h4>
                        {t(`activityTypes.${userData.activityTypes}.description`)}
                    </div>
                </div>
            </div>
        </div>
    );
};
