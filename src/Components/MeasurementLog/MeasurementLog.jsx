import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../App';
import DisplayMeasurements from './DisplayMeasurements';
import NewMeasurements from './NewMeasurements';
import MeasurementGraph from '../MeasurementGraph/measurementGraph';


export default function MeasurementLog() {
    const { t } = useTranslation();
    const { userData, setUserData } = useContext(UserContext);
    const initMeasurementLog = userData.measurementLog || [];
    const [showNewMeasurement, setShowNewMeasurement] = useState(false);
    const [showGraph, setShowGraph] = useState(false);

    const handleLoadMeasurements = () => {
        setShowNewMeasurement(true);
    };
    const handleShowGraph = () => {
        setShowGraph(true);
    }
    const handleHideGraph = () => {
        setShowGraph(false);
    }

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

            {showGraph && (
                <>
                    <p>{t('measurementLog.graphTitle')}</p>
                    <MeasurementGraph measurements={initMeasurementLog} />
                </>
            )}

            {!showNewMeasurement && (
                <button onClick={handleLoadMeasurements}>
                    {t('measurementLog.addMeasurementButton')}
                </button>
            )}


            {!showGraph && (
                <button onClick={handleShowGraph}>
                    {t('measurementLog.showGraphButton')}
                </button>
            )}
            {showGraph && (
                <button onClick={handleHideGraph}>
                    {t('measurementLog.hideGraphButton')}
                </button>
            )}
        </div>
    );
}
