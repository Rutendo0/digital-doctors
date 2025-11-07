import React from 'react';
import { Calendar, CheckCircle, Clock, Users, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import FullCalendarView from './FullCalendarView';

function Dashboard({ onAppointmentClick }) {
  try {
    const stats = [
      { label: 'Total Appointments', value: '3', change: '+12%', trend: 'up', icon: Calendar, color: 'blue' },
      { label: 'Completed Today', value: '1', change: '+5', trend: 'up', icon: CheckCircle, color: 'green' },
      { label: 'Pending', value: '5', change: '2 urgent', trend: 'neutral', icon: Clock, color: 'orange' },
      { label: 'Total Patients', value: '10', change: '+8%', trend: 'up', icon: Users, color: 'purple' }
    ];

    return (
      <div className="space-y-5" data-name="dashboard" data-file="components/Dashboard.js">
        <div className="grid grid-cols-4 gap-5">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            const TrendIcon = stat.trend === 'up' ? TrendingUp : stat.trend === 'down' ? TrendingDown : Minus;
            return (
              <div key={idx} className={`card stat-card cursor-pointer group relative overflow-hidden ${
                stat.color === 'blue' ? 'border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-blue-100' :
                stat.color === 'green' ? 'border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-green-100' :
                stat.color === 'orange' ? 'border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-orange-100' :
                'border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-purple-100'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center space-x-1 px-2.5 py-1 rounded-full shadow-sm ${
                    stat.trend === 'up' ? 'bg-green-100 shadow-green-100' : stat.trend === 'down' ? 'bg-red-100 shadow-red-100' : 'bg-orange-100 shadow-orange-100'
                  }`}>
                    <TrendIcon className={`text-xs ${
                      stat.trend === 'up' ? 'text-green-700' : stat.trend === 'down' ? 'text-red-700' : 'text-orange-700'
                    }`} />
                    <span className={`text-xs font-semibold ${
                      stat.trend === 'up' ? 'text-green-700' : stat.trend === 'down' ? 'text-red-700' : 'text-orange-700'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <p className={`text-xs mb-2 uppercase font-semibold tracking-wide ${
                  stat.color === 'blue' ? 'text-blue-700' :
                  stat.color === 'green' ? 'text-green-700' :
                  stat.color === 'orange' ? 'text-orange-700' : 'text-purple-700'
                }`}>{stat.label}</p>
                <h3 className={`text-3xl font-bold ${
                  stat.color === 'blue' ? 'text-blue-900' :
                  stat.color === 'green' ? 'text-green-900' :
                  stat.color === 'orange' ? 'text-orange-900' : 'text-purple-900'
                }`}>{stat.value}</h3>
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="card">
            <FullCalendarView onAppointmentClick={onAppointmentClick} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Dashboard component error:', error);
    return null;
  }
}

export default Dashboard;
