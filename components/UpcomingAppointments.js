import React from 'react';
import { Stethoscope, Clock } from 'lucide-react';

function UpcomingAppointments({ onAppointmentClick }) {
  try {
    const appointments = [
      { id: 1, patient: 'Sarah Moyo', time: '09:00 AM', department: 'Cardiology', status: 'confirmed' },
      { id: 2, patient: 'Michael Kondo', time: '10:30 AM', department: 'General', status: 'confirmed' },
      { id: 3, patient: 'Emma Kudya', time: '02:00 PM', department: 'Pediatrics', status: 'pending' },
      { id: 4, patient: 'James Moyo', time: '03:30 PM', department: 'Orthopedics', status: 'confirmed' }
    ];

    return (
      <div className="card" data-name="upcoming-appointments" data-file="components/UpcomingAppointments.js">
        <h3 className="text-lg font-bold text-text-dark mb-4">Today's Appointments</h3>
        <div className="space-y-3">
          {appointments.map(apt => (
            <div
              key={apt.id}
              onClick={() => onAppointmentClick && onAppointmentClick({
                id: apt.id,
                patient: apt.patient,
                type: apt.department,
                start: new Date().toISOString()
              })}
              className={`group flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border-l-4 ${
                apt.status === 'confirmed'
                  ? 'bg-gradient-to-r from-green-50 to-green-100 border-l-green-500 hover:from-green-100 hover:to-green-200'
                  : 'bg-gradient-to-r from-orange-50 to-orange-100 border-l-orange-500 hover:from-orange-100 hover:to-orange-200'
              } shadow-sm hover:shadow-md`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg ${
                  apt.status === 'confirmed'
                    ? 'bg-gradient-to-br from-green-400 to-green-600'
                    : 'bg-gradient-to-br from-orange-400 to-orange-600'
                }`}>
                  {apt.patient.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className={`font-semibold text-sm transition-colors ${
                    apt.status === 'confirmed' ? 'text-green-800 group-hover:text-green-900' : 'text-orange-800 group-hover:text-orange-900'
                  }`}>{apt.patient}</p>
                  <p className={`text-xs flex items-center space-x-1 ${
                    apt.status === 'confirmed' ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    <Stethoscope className="text-xs" />
                    <span>{apt.department}</span>
                  </p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end space-y-1">
                <p className={`text-sm font-bold flex items-center space-x-1 ${
                  apt.status === 'confirmed' ? 'text-green-800' : 'text-orange-800'
                }`}>
                  <Clock className="text-xs" />
                  <span>{apt.time}</span>
                </p>
                <span className={`text-xs px-3 py-1 rounded-full font-semibold shadow-sm ${
                  apt.status === 'confirmed'
                    ? 'bg-green-200 text-green-800 shadow-green-200'
                    : 'bg-orange-200 text-orange-800 shadow-orange-200'
                }`}>
                  {apt.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('UpcomingAppointments component error:', error);
    return null;
  }
}

export default UpcomingAppointments;
