import React, { useContext } from 'react';
import { getUserFromId, saveMeasurementLogToLocalStorage } from '../functions/functions';
import { UserContext } from '../../App';
import FormMeasurement from './FormMeasurement';

export default function NewMeasurements({ setShowMeasurement, onAddMeasurement }) {
    const { userData } = useContext(UserContext);
    const selectedUser = getUserFromId(userData);

    const handleFormSubmit = (newMeasurement) => {
        saveMeasurementLogToLocalStorage(selectedUser.id, newMeasurement);
        setShowMeasurement(false);
    };

    return (
        <FormMeasurement
            onSubmit={handleFormSubmit}
            setShowMeasurement={setShowMeasurement}
        />
    );
};

