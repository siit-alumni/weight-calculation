import { use, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../App';
import DisplayMeasurements from './DisplayMeasurements';
import NewMeasurements from './NewMeasurements';
import MeasurementGraph from '../MeasurementGraph/measurementGraph';
import { deleteMeasurementFromLocalStorage, getUserFromId } from '../functions/functions';


export default function MeasurementLog() {
    const { t } = useTranslation();
    const { userData, setUserData } = useContext(UserContext);
    const selectedUser = getUserFromId(userData);
    const initMeasurementLog = selectedUser.measurementLog || [];
    const [showNewMeasurement, setShowNewMeasurement] = useState(false);
    const [showGraph, setShowGraph] = useState(false);
    const [selectedMeasurementIndex, setSelectedMeasurementIndex] = useState(null);

    const handleEditMeasurement = (index) => {
        console.log(`Edit measurement at index: ${selectedMeasurementIndex}`);
        setSelectedMeasurementIndex(null);
    }

    const handleDeleteMeasurement = (index) => {
        console.log(`Delete measurement at index: ${selectedMeasurementIndex}`);
        deleteMeasurementFromLocalStorage(userData, selectedMeasurementIndex);
        setSelectedMeasurementIndex(null);
    }

    const handleLoadMeasurements = () => {
        setShowNewMeasurement(true);
    };
    const handleShowGraph = () => {
        setShowGraph(true);
    }
    const handleHideGraph = () => {
        setShowGraph(false);
    }

    function getIndex(index) {
        setSelectedMeasurementIndex(index);
    }

    return (
        <div>
            <h3>{t("measurementLog.title", { name: selectedUser.name })}</h3>
            {initMeasurementLog.length === 0 ? (
                <p>{t("measurementLog.noMeasurements")}</p>
            ) : (
                <DisplayMeasurements selectedMeasurementIndex={selectedMeasurementIndex} getIndex={getIndex} measurements={initMeasurementLog} />
            )}

            {showNewMeasurement && (
                <NewMeasurements setShowMeasurement={setShowNewMeasurement} />
            )}

            <div>
                {selectedMeasurementIndex !== null && (
                    <button onClick={handleEditMeasurement}>
                        {t('measurementLog.editMeasurementButton')}
                    </button>
                )}
                {selectedMeasurementIndex !== null && (
                    <button onClick={handleDeleteMeasurement}>
                        {t('measurementLog.deleteMeasurementButton')}
                    </button>
                )}
            </div>

            <div className="d-flex align-items-center justify-content-center flex-column">
                {!showNewMeasurement && (
                    <button onClick={handleLoadMeasurements}>
                        {t('measurementLog.addMeasurementButton')}
                    </button>
                )}


            </div>

            {showGraph && (
                <>
                    <p>{t('measurementLog.graphTitle')}</p>
                    <MeasurementGraph measurements={initMeasurementLog} />
                </>
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
