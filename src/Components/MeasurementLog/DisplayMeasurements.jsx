import React from 'react';
import { useTranslation } from 'react-i18next';

export default function DisplayMeasurements({ measurements }) {
    const { t } = useTranslation();

    if (!Array.isArray(measurements)) {
        return null;
    }

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
                    {measurements.map((m, idx) => (
                        <tr key={idx}>
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

