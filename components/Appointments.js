import React, { useState } from 'react';
import { Calendar, Clock, X, CheckCircle, XCircle, Settings, Video } from 'lucide-react';
import AvailabilityManagement from './AvailabilityManagement';

function Appointments({ onAppointmentClick }) {
  try {
    const [activeTab, setActiveTab] = useState('pending');

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
      { id: 'pending', label: `Pending Requests (${pendingAppointments.length})`, icon: Clock },
      { id: 'cancelled', label: `Cancelled (${cancelledAppointments.length})`, icon: X },
      { id: 'availability', label: 'Availability', icon: Settings }
    ];

    return (
      <div data-name="appointments" data-file="components/Appointments.js">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-text-dark mb-2">Appointments Management</h2>
          <p className="text-text-muted">Manage your appointments, view calendar, and handle requests</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl border-b border-border-color">
            <div className="flex space-x-1">
              {tabs.map(tab => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                const hasCount = tab.label.includes('(');

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-primary shadow-md transform scale-105'
                        : 'text-text-muted hover:text-text-dark hover:bg-white/50'
                    }`}
                  >
                    <IconComponent className={`text-lg ${isActive ? 'text-primary' : ''}`} />
                    <span className={isActive ? 'font-semibold' : ''}>{tab.label}</span>
                    {hasCount && !isActive && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                        {tab.label.match(/\((\d+)\)/)?.[1] || '0'}
                      </span>
                    )}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-primary rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="text-sm text-text-muted">
              {activeTab === 'pending' && 'Review and respond to appointment requests'}
              {activeTab === 'cancelled' && 'View cancelled appointment history'}
              {activeTab === 'availability' && 'Manage your availability and schedule'}
            </div>
          </div>

          <div className="min-h-[600px]">

            {activeTab === 'pending' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text-dark">Pending Appointment Requests</h3>
                {pendingAppointments.length === 0 ? (
                  <div className="text-center py-8 text-text-muted">
                    <Clock className="text-4xl mx-auto mb-4 opacity-50" />
                    <p>No pending appointment requests</p>
                  </div>
                ) : (
                  pendingAppointments.map(appointment => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border border-border-color rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                          {appointment.patient.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-dark">{appointment.patient}</h4>
                          <p className="text-sm text-text-muted">{appointment.type}</p>
                          <p className="text-xs text-text-muted">
                            {appointment.date} at {appointment.time}
                          </p>
                          <p className="text-xs text-text-muted">
                            Requested: {new Date(appointment.requestedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleAcceptAppointment(appointment.id)}
                          className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-all"
                        >
                          <CheckCircle className="text-sm" />
                          <span className="text-sm font-medium">Accept</span>
                        </button>
                        <button
                          onClick={() => handleCancelAppointment(appointment.id)}
                          className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all"
                        >
                          <XCircle className="text-sm" />
                          <span className="text-sm font-medium">Cancel</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'cancelled' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text-dark">Cancelled Appointments</h3>
                {cancelledAppointments.length === 0 ? (
                  <div className="text-center py-8 text-text-muted">
                    <X className="text-4xl mx-auto mb-4 opacity-50" />
                    <p>No cancelled appointments</p>
                  </div>
                ) : (
                  cancelledAppointments.map(appointment => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border border-red-200 bg-red-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white font-semibold text-sm">
                          {appointment.patient.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-dark">{appointment.patient}</h4>
                          <p className="text-sm text-text-muted">{appointment.type}</p>
                          <p className="text-xs text-text-muted">
                            {appointment.date} at {appointment.time}
                          </p>
                          <p className="text-xs text-red-600">
                            Cancelled by {appointment.cancelledBy} on {new Date(appointment.cancelledAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-red-600">
                        <XCircle className="text-xl" />
                      </div>
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