import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AppointmentsChart() {
  try {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Completed',
        data: [45, 52, 48, 58, 55, 62, 70, 75, 68, 72, 65, 58],
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
        borderRadius: 4,
        borderSkipped: false,
      }, {
        label: 'Cancelled',
        data: [5, 8, 6, 7, 5, 8, 10, 8, 6, 7, 5, 4],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 2,
        borderRadius: 4,
        borderSkipped: false,
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            usePointStyle: true,
            padding: 20,
            font: { size: 12, weight: 'bold' }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: 'white',
          bodyColor: 'white',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          borderWidth: 1,
          cornerRadius: 8,
          displayColors: true,
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0, 0, 0, 0.1)' },
          ticks: { color: '#374151', font: { size: 11 } }
        },
        x: {
          grid: { display: false },
          ticks: { color: '#374151', font: { size: 11 } }
        }
      },
      animation: {
        duration: 1000,
        easing: 'easeInOutQuart'
      }
    };

    return (
      <div className="card bg-gradient-to-br from-white to-blue-50 border-l-4 border-l-blue-500 shadow-lg" data-name="appointments-chart" data-file="components/AppointmentsChart.js">
        <div className="flex items-center space-x-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
            <span className="text-white text-sm font-bold">📊</span>
          </div>
          <h3 className="text-lg font-bold text-blue-900">Appointments Overview</h3>
        </div>
        <div style={{ height: '250px' }} className="relative">
          <Bar data={data} options={options} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('AppointmentsChart component error:', error);
    return null;
  }
}

export default AppointmentsChart;
