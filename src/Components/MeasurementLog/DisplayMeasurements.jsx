import React, { use, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { deleteMeasurementFromLocalStorage } from '../functions/functions';
import { UserContext } from '../../App';

export default function DisplayMeasurements({ measurements }) {
    const { t } = useTranslation();
    const{ userData, setUserData } = useContext(UserContext);
    const [selectedMeasurementIndex, setSelectedMeasurementIndex] = useState(null);
    
    const handleEditMeasurement = (index) => {
        console.log(`Edit measurement at index: ${selectedMeasurementIndex}`);
        
    }
    
    const handleDeleteMeasurement = (index) => {
        console.log(`Delete measurement at index: ${selectedMeasurementIndex}`);
        deleteMeasurementFromLocalStorage(userData, selectedMeasurementIndex);
        setSelectedMeasurementIndex(null);
    }
    
    console.log(`selectedMeasurementIndex: ${selectedMeasurementIndex}`);
    if (!Array.isArray(measurements)) {
        return null;
    }
    
    const handleSelectDate = (index) => {
        console.log(index);
        setSelectedMeasurementIndex(index);

    };
    
    useEffect(() => {
        console.log('Measurements changed:', measurements);
    }, [measurements, selectedMeasurementIndex]);

  
    return (
        <div>

            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>{t('measurementLog.date')}</th>
                        <th>{t('measurementLog.weight')} (kg)</th>
                        <th>{t('measurementLog.fat')}</th>
                        <th>{t('measurementLog.muscleMass')}</th>
                    </tr>
                </thead>
                <tbody>
                    {measurements.slice().reverse().map((m, idx) => (
                        <tr key={idx}
                            onClick={() => handleSelectDate(idx)}>
                            <td>{m.date}</td>
                            <td>{m.weight}</td>
                            <td>{m.fat}%</td>
                            <td>{m.muscleMass} kg</td>
                        </tr>
                    ))}
                </tbody>
            </table>



            {selectedMeasurementIndex && (
                <button onClick={handleEditMeasurement}>
                    {t('measurementLog.editMeasurementButton')}
                </button>
            )}
            {selectedMeasurementIndex && (
                <button onClick={handleDeleteMeasurement}>
                    {t('measurementLog.deleteMeasurementButton')}
                </button>
            )}
        </div>

    );
};

