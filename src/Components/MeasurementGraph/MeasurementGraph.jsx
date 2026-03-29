import React from 'react';
import { useTranslation } from 'react-i18next';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import DisplayGraph from './DisplayGraph';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


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
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.1)',
            // tension: 0.1
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: t('measurementLog.weight')
            }
        },
        scales: {
            y: {
                beginAtZero: false
            }
        }
    };



    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">{t('measurementLog.allMeasurements')}</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="weight-tab" data-bs-toggle="tab" data-bs-target="#weight" type="button" role="tab" aria-controls="weight" aria-selected="false">{t('measurementLog.weight')}</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="fat-tab" data-bs-toggle="tab" data-bs-target="#fat" type="button" role="tab" aria-controls="fat" aria-selected="false">{t('measurementLog.fat')}</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="muscle-tab" data-bs-toggle="tab" data-bs-target="#muscle" type="button" role="tab" aria-controls="muscle" aria-selected="false">{t('measurementLog.muscleMass')}</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
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
                </div>
                <div className="tab-pane fade" id="weight" role="tabpanel" aria-labelledby="weight-tab">
                    <div >
                    <DisplayGraph measurements={measurements} value="weight" />
                    </div>
                </div>
                <div className="tab-pane fade" id="fat" role="tabpanel" aria-labelledby="fat-tab">
                    <DisplayGraph measurements={measurements} value="fat" />
                </div>
                <div className="tab-pane fade" id="muscle" role="tabpanel" aria-labelledby="muscle-tab">
                    <DisplayGraph measurements={measurements} value="muscleMass" />
                </div>
            </div>
        </div>
    );
};

