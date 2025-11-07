import React from 'react';
import { UserPlus, FileText, MessageSquare } from 'lucide-react';

function QuickStats() {
  try {
    const stats = [
      { label: 'New Patients Today', value: '5', icon: UserPlus, color: 'green' },
      { label: 'Pending Reviews', value: '12', icon: FileText, color: 'orange' },
      { label: 'Messages', value: '8', icon: MessageSquare, color: 'blue' }
    ];

    return (
      <div className="card" data-name="quick-stats" data-file="components/QuickStats.js">
        <h3 className="font-bold text-base text-text-dark mb-4">Quick Stats</h3>
        <div className="space-y-3">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className={`group flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all border-l-4 shadow-sm hover:shadow-md ${
                stat.color === 'green'
                  ? 'bg-gradient-to-r from-green-50 to-green-100 border-l-green-500 hover:from-green-100 hover:to-green-200'
                  : stat.color === 'orange'
                  ? 'bg-gradient-to-r from-orange-50 to-orange-100 border-l-orange-500 hover:from-orange-100 hover:to-orange-200'
                  : 'bg-gradient-to-r from-blue-50 to-blue-100 border-l-blue-500 hover:from-blue-100 hover:to-blue-200'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg ${
                    stat.color === 'green'
                      ? 'bg-gradient-to-br from-green-200 to-green-300 shadow-green-200'
                      : stat.color === 'orange'
                      ? 'bg-gradient-to-br from-orange-200 to-orange-300 shadow-orange-200'
                      : 'bg-gradient-to-br from-blue-200 to-blue-300 shadow-blue-200'
                  }`}>
                    <IconComponent className={`text-lg ${
                      stat.color === 'green' ? 'text-green-700' :
                      stat.color === 'orange' ? 'text-orange-700' : 'text-blue-700'
                    }`} />
                  </div>
                  <span className={`text-sm font-medium ${
                    stat.color === 'green' ? 'text-green-800' :
                    stat.color === 'orange' ? 'text-orange-800' : 'text-blue-800'
                  }`}>{stat.label}</span>
                </div>
                <span className={`font-bold text-lg ${
                  stat.color === 'green' ? 'text-green-900' :
                  stat.color === 'orange' ? 'text-orange-900' : 'text-blue-900'
                } group-hover:scale-110 transition-transform`}>{stat.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.error('QuickStats component error:', error);
    return null;
  }
}

export default QuickStats;
