import React, { use, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { deleteMeasurementFromLocalStorage } from '../functions/functions';
import { UserContext } from '../../App';


export default function DisplayMeasurements({ getIndex, measurements }) {
    const { t } = useTranslation();
    const{ userData, setUserData } = useContext(UserContext);
    const[selectedMeasurementIndex, setSelectedMeasurementIndex] = useState(null);
    if (!Array.isArray(measurements)) {
        return null;
    }
    
    const handleSelectDate = (index) => {
        console.log(index);
        getIndex(index);
        setSelectedMeasurementIndex(index);
    };

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
                            onClick={() => handleSelectDate(idx)}
                            className={selectedMeasurementIndex === idx ? 'table-active fw-bold' : ''}>
                            <td>{m.date}</td>
                            <td>{m.weight}</td>
                            <td>{m.fat}%</td>
                            <td>{m.muscleMass} kg</td>
                        </tr>
                    ))}
                </tbody>
            </table>




        </div>

    );
};

