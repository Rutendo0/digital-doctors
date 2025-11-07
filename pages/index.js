import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Appointments from '../components/Appointments';
import Patients from '../components/Patients';
import Analytics from '../components/Analytics';
import Settings from '../components/Settings';
import ConsultationRoom from '../components/ConsultationRoom';
import AvailabilityModal from '../components/AvailabilityModal';
import ProfileModal from '../components/ProfileModal';
import PatientViewModal from '../components/PatientViewModal';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">Please reload the page</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Home() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
    setCurrentView('consultation');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedAppointment(null);
  };

  return (
    <ErrorBoundary>
      <div className="flex min-h-screen bg-bg-light" data-name="app" data-file="app.js">
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} />

        <div className="flex-1 flex flex-col bg-bg-light">
          <Header
            currentView={currentView}
            onShowProfile={() => setShowProfileModal(true)}
          />

          <main className="flex-1 p-6">
            {currentView === 'dashboard' && (
              <Dashboard
                onAppointmentClick={handleAppointmentClick}
              />
            )}

            {currentView === 'appointments' && (
              <Appointments
                onAppointmentClick={handleAppointmentClick}
              />
            )}

            {currentView === 'patients' && (
              <Patients
                onViewPatient={(patient) => {
                  setSelectedPatient(patient);
                  setShowPatientModal(true);
                }}
              />
            )}
            {currentView === 'analytics' && <Analytics />}
            {currentView === 'settings' && <Settings />}

            {currentView === 'consultation' && selectedAppointment && (
              <ConsultationRoom
                appointment={selectedAppointment}
                onBack={handleBackToDashboard}
              />
            )}
          </main>
        </div>

        {showAvailabilityModal && (
          <AvailabilityModal onClose={() => setShowAvailabilityModal(false)} />
        )}

        {showProfileModal && (
          <ProfileModal onClose={() => setShowProfileModal(false)} />
        )}

        {showPatientModal && selectedPatient && (
          <PatientViewModal
            patient={selectedPatient}
            onClose={() => {
              setShowPatientModal(false);
              setSelectedPatient(null);
            }}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}
