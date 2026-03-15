import React from 'react';
import { useTranslation } from 'react-i18next';

export default function DisplayMeasurements({ measurements }) {
    const { t } = useTranslation();
    
    if (!Array.isArray(measurements)) {
        return null;
    }

    return (
        <ul className="list-unstyled">
            {measurements.map((m, idx) => (
                <li key={idx}>
                    <strong>{t('measurementLog.date')}:</strong> {m.date} | 
                    <strong> {t('measurementLog.weight')}:</strong> {m.weight} kg | 
                    <strong> {t('measurementLog.fat')}:</strong> {m.fat}% | 
                    <strong> {t('measurementLog.muscleMass')}:</strong> {m.muscleMass} kg
                </li>
            ))}
        </ul>
    );
};

