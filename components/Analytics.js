import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, LineController, DoughnutController, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { TrendingUp, Activity, Users, FileText } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, LineController, DoughnutController, Title, Tooltip, Legend, ArcElement);

function Analytics() {
  try {
    const chartRef1 = React.useRef(null);
    const chartRef2 = React.useRef(null);
    const chart1Instance = React.useRef(null);
    const chart2Instance = React.useRef(null);

    React.useEffect(() => {
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
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
            legend: { display: false },
            tooltip: {
              backgroundColor: '#1E293B',
              padding: 12,
              cornerRadius: 8
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: '#E2E8F0'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });

      const ctx2 = chartRef2.current.getContext('2d');
      chart2Instance.current = new ChartJS(ctx2, {
        type: 'doughnut',
        data: {
          labels: ['Completed', 'Pending', 'Cancelled', 'Confirmed'],
          datasets: [{
            data: [45, 25, 15, 15],
            backgroundColor: ['#22C55E', '#F97316', '#EF4444', '#3B82F6'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 15,
                font: {
                  size: 12
                },
                usePointStyle: true
              }
            }
          }
        }
      });

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
      <div className="space-y-6" data-name="analytics" data-file="components/Analytics.js">
        <div>
          <h2 className="text-2xl font-bold text-text-dark">Analytics & Reports</h2>
          <p className="text-text-muted mt-1">Track your practice performance and insights</p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div className="metric-card bg-gradient-blue cursor-pointer">
            <div className="gradient-overlay"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 p-2.5 rounded-lg backdrop-blur-sm">
                  <Users className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-sm font-medium text-white/90 mb-1">Total Patients</p>
              <h3 className="text-4xl font-bold mb-1">10</h3>
              <p className="text-xs text-white/70">All time</p>
            </div>
          </div>
          <div className="metric-card bg-gradient-green cursor-pointer">
            <div className="gradient-overlay"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 p-2.5 rounded-lg backdrop-blur-sm">
                  <Activity className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-sm font-medium text-white/90 mb-1">Avg. Daily Visits</p>
              <h3 className="text-4xl font-bold mb-1">9</h3>
              <p className="text-xs text-white/70">Per day</p>
            </div>
          </div>
          <div className="metric-card bg-gradient-purple cursor-pointer">
            <div className="gradient-overlay"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 p-2.5 rounded-lg backdrop-blur-sm">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-sm font-medium text-white/90 mb-1">Satisfaction Rate</p>
              <h3 className="text-4xl font-bold mb-1">98%</h3>
              <p className="text-xs text-white/70">Patient feedback</p>
            </div>
          </div>
          <div className="metric-card bg-gradient-blue-purple cursor-pointer">
            <div className="gradient-overlay"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 p-2.5 rounded-lg backdrop-blur-sm">
                  <FileText className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-sm font-medium text-white/90 mb-1">Prescriptions</p>
              <h3 className="text-4xl font-bold mb-1">12</h3>
              <p className="text-xs text-white/70">This month</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-dark">Patient Visit Trends</h3>
              <div className="flex gap-2">
                <button className="text-xs px-3 py-1.5 bg-arcus-blue-100 text-arcus-blue-700 rounded-lg font-medium">6 Months</button>
                <button className="text-xs px-3 py-1.5 text-text-muted hover:bg-gray-100 rounded-lg">1 Year</button>
              </div>
            </div>
            <div style={{ height: '300px' }}>
              <canvas ref={chartRef1}></canvas>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-dark">Appointment Status</h3>
              <button className="text-xs px-3 py-1.5 text-text-muted hover:bg-gray-100 rounded-lg">This Week</button>
            </div>
            <div style={{ height: '300px' }}>
              <canvas ref={chartRef2}></canvas>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-text-dark mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'Completed consultation', patient: 'Sarah Moyo', time: '2 hours ago', type: 'success' },
              { action: 'New appointment scheduled', patient: 'Michael Kondo', time: '4 hours ago', type: 'info' },
              { action: 'Prescription issued', patient: 'Emma Kudya', time: '5 hours ago', type: 'warning' },
              { action: 'Lab results reviewed', patient: 'James Moyo', time: '1 day ago', type: 'info' }
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-bg-light rounded-lg hover:bg-arcus-blue-50 transition-all">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-arcus-green-500' :
                    activity.type === 'warning' ? 'bg-arcus-orange-500' :
                    'bg-arcus-blue-500'
                  }`}></div>
                  <div>
                    <p className="text-sm font-medium text-text-dark">{activity.action}</p>
                    <p className="text-xs text-text-muted">{activity.patient}</p>
                  </div>
                </div>
                <span className="text-xs text-text-muted">{activity.time}</span>
              </div>
            ))}
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
