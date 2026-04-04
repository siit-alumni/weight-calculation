
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
import { stringToRgbColor } from '../functions/functions';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export default function DisplayGraph({ measurements, value }) {
    const { t } = useTranslation();
    const data = {
        labels: measurements.map(m => m.date),
        datasets: value.map(param => ({
            label: ` ${t(`measurementLog.${param}`)} (${t(`measurementLog.${param}UM`)})`,
            data: measurements.map(m => m[param]),
            borderColor: stringToRgbColor(param),
            backgroundColor: 'rgba(75, 192, 192, 0.1)',
            // tension: 0.1
        }))
    };

    return (
        <div>
         
            <Line data={data}  />
        </div>
    );
}