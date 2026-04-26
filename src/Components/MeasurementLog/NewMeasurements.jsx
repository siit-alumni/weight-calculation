import React, { useContext } from 'react';
import { getUserFromId, saveMeasurementLogToLocalStorage } from '../functions/functions';
import { UserContext } from '../../App';
import FormMeasurement from './FormMeasurement';

export default function NewMeasurements({ setShowMeasurement, setSelectedMeasurementIndex }) {
    const { userData } = useContext(UserContext);
    const handleFormSubmit = (newMeasurement) => {
        saveMeasurementLogToLocalStorage(userData, newMeasurement);
        setShowMeasurement(false);
    };

    
    return (
        <FormMeasurement
            onSubmit={handleFormSubmit}
            setShowMeasurement={setShowMeasurement}
        />
    );
};

