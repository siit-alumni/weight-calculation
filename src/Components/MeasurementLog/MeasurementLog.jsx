import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../App';
import DisplayMeasurements from './DisplayMeasurements';
import NewMeasurements from './NewMeasurements';


export default function MeasurementLog() {
    const { t } = useTranslation();
    const { userData, setUserData } = useContext(UserContext);
    const initMeasurementLog = userData.measurementLog || [];
    const [showNewMeasurement, setShowNewMeasurement] = useState(false);    
    const handleLoadMeasurements = () => {
        setShowNewMeasurement(true);
    };

    return (
        <div>
            <h3>{t("measurementLog.title", { name: userData.name })}</h3>
            {initMeasurementLog.length === 0 ? (
                <p>{t("measurementLog.noMeasurements")}</p>
            ) : (  
            <DisplayMeasurements measurements={initMeasurementLog} />
            )}
           
            {showNewMeasurement && (
                <NewMeasurements setShowMeasurement={setShowNewMeasurement} />
            )}

            {!showNewMeasurement && (
                <button onClick={handleLoadMeasurements}>
                    {t('measurementLog.addMeasurementButton')}
                </button>
            )}
        </div>
    );
}
