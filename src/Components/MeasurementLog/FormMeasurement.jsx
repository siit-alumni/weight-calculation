import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FormMeasurement({ onSubmit, setShowMeasurement, initialWeight = '', initialDate = '', initialMuscleMass = '', initialFat = '' }) {
    const { t } = useTranslation();
    const [weight, setWeight] = useState(initialWeight);
    const [date, setDate] = useState(initialDate);
    const [muscleMass, setMuscleMass] = useState(initialMuscleMass);
    const [fat, setFat] = useState(initialFat);

    const handleSubmit = (e) => {
        e.preventDefault();
        const measurement = {
            weight,
            date,
            muscleMass,
            fat,
        };
        onSubmit(measurement);
        setWeight('');
        setDate('');
        setMuscleMass('');
        setFat('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        {t('measurementLog.date')}:
                        <input
                            className="form-control"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
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
                            onChange={(e) => setWeight(e.target.value)}
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
                            onChange={(e) => setMuscleMass(e.target.value)}
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
                            onChange={(e) => setFat(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">{t('measurementLog.saveButton')}</button>
            </form>
            <button onClick={() => setShowMeasurement(false)}>
                {t('measurementLog.cancelButton')}
            </button>
        </>
    );
}