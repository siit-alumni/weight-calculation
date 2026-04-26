import React, { useContext } from 'react';
import { UserContext } from '../../App';
import FormMeasurement from './FormMeasurement';
import { getUserFromId, updateMeasurementInLocalStorage } from '../functions/functions';

export default function EditMeasurement({ measurement, measurementIndex, setShowEditMeasurement, setSelectedMeasurementIndex }) {
const { userData } = useContext(UserContext);

    const handleSubmit = (updatedMeasurement) => {
        
        updateMeasurementInLocalStorage(userData, measurementIndex, updatedMeasurement);
        setShowEditMeasurement(false);
        setSelectedMeasurementIndex(null);
    };

    return (
        <FormMeasurement
            onSubmit={handleSubmit}
            setShowMeasurement={setShowEditMeasurement}
            initialWeight={measurement.weight}
            initialDate={measurement.date}
            initialMuscleMass={measurement.muscleMass}
            initialFat={measurement.fat}
        />
    );
}