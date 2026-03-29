import React from 'react';
import { useTranslation } from 'react-i18next';
import { Line } from 'react-chartjs-2';


export default function MeasurementGraph({ measurements }) {
    const { t } = useTranslation();
    
    if (!Array.isArray(measurements)) {
        return null;
    }
    const data = {
        labels: measurements.map(m => m.date),
        datasets: [{
            label: t('measurementLog.weight'),
            data: measurements.map(m => m.weight),
            // fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };
    console.log(data);
    

    return (
        <div className="container">
            <Line data={data} />
        </div>
    );
};

