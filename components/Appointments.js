import React, { useState } from 'react';
import { Calendar, Clock, X, CheckCircle, XCircle, Settings, Video, User, ArrowLeft } from 'lucide-react';
import AvailabilityManagement from './AvailabilityManagement';
import FullCalendarView from './FullCalendarView';

function Appointments({ onAppointmentClick }) {
  try {
    const [activeTab, setActiveTab] = useState('pending');
    const [showCalendar, setShowCalendar] = useState(false);

    const [appointments, setAppointments] = useState([
      {
        id: '1',
        patient: 'Sarah Moyo',
        type: 'Cardiology',
        date: '2025-11-07',
        time: '09:00 AM',
        status: 'confirmed',
        requestedAt: '2025-11-05T10:30:00Z'
      },
      {
        id: '2',
        patient: 'Michael Kondo',
        type: 'General',
        date: '2025-11-07',
        time: '10:30 AM',
        status: 'confirmed',
        requestedAt: '2025-11-06T14:20:00Z'
      },
      {
        id: '3',
        patient: 'Emma Kudya',
        type: 'Pediatrics',
        date: '2025-11-07',
        time: '02:00 PM',
        status: 'pending',
        requestedAt: '2025-11-06T16:45:00Z'
      },
      {
        id: '4',
        patient: 'James Moyo',
        type: 'Orthopedics',
        date: '2025-11-08',
        time: '11:00 AM',
        status: 'cancelled',
        cancelledBy: 'patient',
        cancelledAt: '2025-11-06T18:30:00Z',
        requestedAt: '2025-11-05T09:15:00Z'
      },
      {
        id: '5',
        patient: 'Lisa Sibanda',
        type: 'Dermatology',
        date: '2025-11-09',
        time: '03:30 PM',
        status: 'pending',
        requestedAt: '2025-11-07T08:00:00Z'
      }
    ]);

    const handleAcceptAppointment = (id) => {
      setAppointments(prev =>
        prev.map(apt =>
          apt.id === id ? { ...apt, status: 'confirmed' } : apt
        )
      );
    };

    const handleCancelAppointment = (id) => {
      setAppointments(prev =>
        prev.map(apt =>
          apt.id === id ? {
            ...apt,
            status: 'cancelled',
            cancelledBy: 'doctor',
            cancelledAt: new Date().toISOString()
          } : apt
        )
      );
    };

    const pendingAppointments = appointments.filter(apt => apt.status === 'pending');
    const cancelledAppointments = appointments.filter(apt => apt.status === 'cancelled');

    const tabs = [
      { id: 'pending', label: 'Pending Requests', count: pendingAppointments.length, icon: Clock },
      { id: 'cancelled', label: 'Cancelled', count: cancelledAppointments.length, icon: X },
      { id: 'availability', label: 'Availability', icon: Settings }
    ];

    if (showCalendar) {
      return (
        <div className="space-y-6" data-name="appointments" data-file="components/Appointments.js">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setShowCalendar(false)}
              className="flex items-center gap-2 px-4 py-2 text-arcus-blue-600 hover:bg-arcus-blue-50 rounded-lg transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Appointments
            </button>
            <h2 className="text-2xl font-bold text-text-dark">Appointment Calendar</h2>
            <div></div>
          </div>
          <FullCalendarView onAppointmentClick={onAppointmentClick} />
        </div>
      );
    }

    return (
      <div className="space-y-6" data-name="appointments" data-file="components/Appointments.js">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-dark">Appointments Management</h2>
            <p className="text-text-muted mt-1">Manage your appointments, view calendar, and handle requests</p>
          </div>
          <button
            onClick={() => setShowCalendar(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            View Calendar
          </button>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-6 border-b border-border-color pb-4">
            {tabs.map(tab => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-blue text-white shadow-arcus-blue'
                      : 'text-text-muted hover:bg-arcus-blue-50 hover:text-arcus-blue-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && tab.count > 0 && (
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      isActive ? 'bg-white/20' : 'bg-arcus-orange-100 text-arcus-orange-700'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="min-h-[500px]">
            {activeTab === 'pending' && (
              <div className="space-y-4">
                {pendingAppointments.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-arcus-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-arcus-blue-500" />
                    </div>
                    <p className="text-text-muted font-medium">No pending appointment requests</p>
                    <p className="text-sm text-text-muted mt-1">New requests will appear here</p>
                  </div>
                ) : (
                  pendingAppointments.map(appointment => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-arcus-blue-50 to-white border border-arcus-blue-100 rounded-xl hover:shadow-arcus transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-blue flex items-center justify-center text-white font-semibold text-sm shadow-arcus-blue">
                          {appointment.patient.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-dark">{appointment.patient}</h4>
                          <p className="text-sm text-text-muted">{appointment.type}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <p className="text-xs text-text-muted flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {appointment.date} at {appointment.time}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAcceptAppointment(appointment.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-arcus-green-100 text-arcus-green-700 rounded-lg hover:bg-arcus-green-200 transition-all font-medium"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Accept
                        </button>
                        <button
                          onClick={() => handleCancelAppointment(appointment.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-arcus-red-100 text-arcus-red-700 rounded-lg hover:bg-arcus-red-200 transition-all font-medium"
                        >
                          <XCircle className="w-4 h-4" />
                          Decline
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'cancelled' && (
              <div className="space-y-4">
                {cancelledAppointments.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <X className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-text-muted font-medium">No cancelled appointments</p>
                  </div>
                ) : (
                  cancelledAppointments.map(appointment => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm">
                          {appointment.patient.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700">{appointment.patient}</h4>
                          <p className="text-sm text-gray-500">{appointment.type}</p>
                          <p className="text-xs text-gray-500">{appointment.date} at {appointment.time}</p>
                        </div>
                      </div>
                      <span className="status-cancelled">Cancelled</span>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'availability' && (
              <AvailabilityManagement />
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Appointments component error:', error);
    return null;
  }
}

export default Appointments;
