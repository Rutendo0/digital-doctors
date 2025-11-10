import React from 'react';
import { Calendar, CheckCircle, Clock, Users, TrendingUp, ArrowUpRight } from 'lucide-react';
import FullCalendarView from './FullCalendarView';

function Dashboard({ onAppointmentClick }) {
  try {
    const stats = [
      { 
        label: 'Total Appointments', 
        value: '3', 
        change: '+12%', 
        subtitle: '8 active today',
        icon: Calendar, 
        gradient: 'bg-gradient-blue' 
      },
      { 
        label: 'Completed Today', 
        value: '1', 
        change: '+5.2%', 
        subtitle: '1 completed',
        icon: CheckCircle, 
        gradient: 'bg-gradient-green' 
      },
      { 
        label: 'Pending', 
        value: '5', 
        change: 'Current', 
        subtitle: '2 urgent cases',
        icon: Clock, 
        gradient: 'bg-gradient-blue-purple' 
      },
      { 
        label: 'Total Patients', 
        value: '10', 
        change: '+8.1%', 
        subtitle: 'Active patients',
        icon: Users, 
        gradient: 'bg-gradient-purple' 
      }
    ];

    return (
      <div className="space-y-6" data-name="dashboard" data-file="components/Dashboard.js">
        <div className="grid grid-cols-4 gap-5">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx} 
                className={`metric-card ${stat.gradient} cursor-pointer`}
              >
                <div className="gradient-overlay"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 p-2.5 rounded-lg backdrop-blur-sm">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    {stat.change.includes('%') && (
                      <div className="flex items-center gap-1 bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span className="text-xs font-semibold">{stat.change}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-medium text-white/90 mb-1">{stat.label}</p>
                  <h3 className="text-4xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-xs text-white/70">{stat.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-text-dark">Schedule Overview</h2>
              <div className="flex gap-2">
                <button className="btn-secondary text-sm">Today</button>
                <button className="btn-primary text-sm">Week</button>
              </div>
            </div>
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
