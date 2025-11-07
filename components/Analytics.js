import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function Analytics() {
  try {
    const chartRef1 = React.useRef(null);
    const chartRef2 = React.useRef(null);
    const chart1Instance = React.useRef(null);
    const chart2Instance = React.useRef(null);

    React.useEffect(() => {
      // Destroy existing charts if they exist
      if (chart1Instance.current) {
        chart1Instance.current.destroy();
      }
      if (chart2Instance.current) {
        chart2Instance.current.destroy();
      }

      const ctx1 = chartRef1.current.getContext('2d');
      chart1Instance.current = new ChartJS(ctx1, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Patient Visits',
            data: [65, 72, 68, 78, 82, 75],
            borderColor: '#3B82F6',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } }
        }
      });

      const ctx2 = chartRef2.current.getContext('2d');
      chart2Instance.current = new ChartJS(ctx2, {
        type: 'doughnut',
        data: {
          labels: ['Completed', 'Pending', 'Cancelled', 'Confirmed'],
          datasets: [{
            data: [45, 25, 15, 15],
            backgroundColor: ['#10B981', '#F59E0B', '#EF4444', '#3B82F6']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });

      // Cleanup function to destroy charts on unmount
      return () => {
        if (chart1Instance.current) {
          chart1Instance.current.destroy();
        }
        if (chart2Instance.current) {
          chart2Instance.current.destroy();
        }
      };
    }, []);

    return (
      <div data-name="analytics" data-file="components/Analytics.js">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Analytics & Reports</h2>
          <p className="text-[var(--text-muted)]">Track your practice performance</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="card">
            <p className="text-sm text-[var(--text-muted)] mb-1">Total Patients</p>
            <h3 className="text-2xl font-bold">10</h3>
          </div>
          <div className="card">
            <p className="text-sm text-[var(--text-muted)] mb-1">Avg. Daily Visits</p>
            <h3 className="text-2xl font-bold">9</h3>
          </div>
          <div className="card">
            <p className="text-sm text-[var(--text-muted)] mb-1">Satisfaction Rate</p>
            <h3 className="text-2xl font-bold">98%</h3>
          </div>
          <div className="card">
            <p className="text-sm text-[var(--text-muted)] mb-1">Prescriptions Issued</p>
            <h3 className="text-2xl font-bold">12</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-bold mb-4">Patient Visit Trends</h3>
            <div style={{ height: '300px' }}>
              <canvas ref={chartRef1}></canvas>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-bold mb-4">Weekly Appointment Status</h3>
            <div style={{ height: '300px' }}>
              <canvas ref={chartRef2}></canvas>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Analytics component error:', error);
    return null;
  }
}

export default Analytics;