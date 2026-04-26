import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getUserFromId, saveMeasurementLogToLocalStorage } from '../functions/functions';
import { UserContext } from '../../App';

export default function NewMeasurements({ setShowMeasurement, onAddMeasurement }) {
        const { userData } = useContext(UserContext);
              const selectedUser = getUserFromId(userData);
    const [weight, setWeight] = useState('');
    const [date, setDate] = useState('');
    const [muscleMass, setMuscleMass] = useState('');
    const [fat, setFat] = useState('');
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMeasurement = {
            weight,
            date,
            muscleMass,
            fat,
        };
        setShowMeasurement(false);
        saveMeasurementLogToLocalStorage(selectedUser.id, newMeasurement);
        setWeight('');
        setMuscleMass('');
        setFat('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    {t('measurementLog.date')}:
                    <input
                        className="form-control"
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    {t('measurementLog.weight')} (kg):
                    <input
                        className="form-control"
                        type="number"
                        step="0.1"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    {t('measurementLog.muscleMass')} (kg):
                    <input
                        className="form-control"
                        type="number"
                        step="0.1"
                        value={muscleMass}
                        onChange={e => setMuscleMass(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    {t('measurementLog.fat')} (%):
                    <input
                        className="form-control"
                        type="number"
                        step="0.1"
                        value={fat}
                        onChange={e => setFat(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">{t('measurementLog.saveButton')}</button>
                            {(
                    <button onClick={() => setShowNewMeasurement(false)}>
                        {t('measurementLog.cancelButton')}
                    </button>
                )}
        </form>
    );
};

