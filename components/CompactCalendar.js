import React, { useState } from 'react';
import { Settings } from 'lucide-react';

function CompactCalendar({ onManageAvailability }) {
  try {
    const [currentDate, setCurrentDate] = useState(new Date());
    const appointments = [
      { date: 6, status: 'confirmed' },
      { date: 10, status: 'completed' },
      { date: 15, status: 'confirmed' },
      { date: 20, status: 'pending' }
    ];

    const getDaysInMonth = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      return { firstDay, daysInMonth };
    };

    const { firstDay, daysInMonth } = getDaysInMonth();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

    return (
      <div className="card" data-name="compact-calendar" data-file="components/CompactCalendar.js">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-bold text-base text-text-dark">
              {currentDate.toLocaleDateString('en-US', { month: 'long' })}
            </h3>
            <p className="text-xs text-text-muted">{currentDate.getFullYear()}</p>
          </div>
          <button onClick={onManageAvailability} className="flex items-center space-x-1 text-xs text-primary hover:text-blue-700 font-medium">
            <Settings className="text-xs" />
            <span>Manage</span>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center text-xs mb-3">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="text-text-muted font-bold">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {emptyDays.map(i => <div key={`empty-${i}`}></div>)}
          {days.map(day => {
            const apt = appointments.find(a => a.date === day);
            const isToday = day === new Date().getDate();
            return (
              <div key={day} className={`relative aspect-square flex items-center justify-center text-xs rounded-lg cursor-pointer font-medium transition-all shadow-sm ${
                isToday ? 'bg-gradient-to-br from-primary to-blue-600 text-white font-bold shadow-lg scale-105 ring-2 ring-primary ring-opacity-50' :
                apt ? `bg-gradient-to-br ${
                  apt.status === 'confirmed' ? 'from-green-100 to-green-200 text-green-800 hover:from-green-200 hover:to-green-300' :
                  apt.status === 'completed' ? 'from-blue-100 to-blue-200 text-blue-800 hover:from-blue-200 hover:to-blue-300' :
                  'from-orange-100 to-orange-200 text-orange-800 hover:from-orange-200 hover:to-orange-300'
                } shadow-md` : 'hover:bg-gray-100 text-text-dark hover:shadow-md'
              }`}>
                {day}
                {apt && !isToday && (
                  <div className={`absolute bottom-0.5 w-1.5 h-1.5 rounded-full ${
                    apt.status === 'confirmed' ? 'bg-green-500' :
                    apt.status === 'completed' ? 'bg-blue-500' : 'bg-orange-500'
                  } shadow-sm`}></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.error('CompactCalendar component error:', error);
    return null;
  }
}

export default CompactCalendar;
