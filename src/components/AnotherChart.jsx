// src/AnotherChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const AnotherChart = () => {
    const data = {
        labels: ['Category A', 'Category B', 'Category C', 'Category D'],
        datasets: [
            {
                data: [40, 30, 20, 10],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    },
                },
            },
        },
    };

    return (
        <div className="flex  mt-5">
            <div className="w-full md:w-1/3">
                <h2 className="text-xl font-bold mb-4">Category Distribution</h2>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default AnotherChart;
