import React from 'react';
import { Phone, MessageCircle, Video, ArrowLeft } from 'lucide-react';
import PatientHistory from './PatientHistory';
import SOAPNotes from './SOAPNotes';
import EPrescription from './EPrescription';

function ConsultationRoom({ appointment, onBack }) {
  try {
    const [activeTab, setActiveTab] = React.useState('notes');

    const startWhatsAppCall = () => {
      const phoneNumber = '+263771234567';
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    const startVideoCall = () => {
      // Placeholder for video call functionality
      alert('Video call feature coming soon!');
    };

    return (
      <div data-name="consultation-room" data-file="components/ConsultationRoom.js">
        <div className="mb-6 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
          <div className="flex items-center space-x-4">
            <button onClick={onBack} className="p-3 hover:bg-white rounded-lg transition-all shadow-sm">
              <ArrowLeft className="text-xl text-blue-600" />
            </button>
            <div>
              <h2 className="text-3xl font-bold text-blue-900">Virtual Consultation Room</h2>
              <p className="text-sm text-blue-700 mt-1 font-medium">
                Patient: {appointment.patient} • {appointment.type} • Status: {appointment.status}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={startVideoCall} className="btn-secondary flex items-center space-x-2 bg-white hover:bg-gray-50 border border-blue-200">
              <Video className="text-lg text-blue-600" />
              <span className="text-blue-700 font-medium">Video Call</span>
            </button>
            <button onClick={startWhatsAppCall} className="btn-primary flex items-center space-x-3 bg-green-500 hover:bg-green-600 px-6 py-3 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all">
              <MessageCircle className="text-xl text-white" />
              <span>Start WhatsApp Call</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          {/* Left Panel - Patient Medical History */}
          <div className="card flex flex-col">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-xl">
              <h3 className="text-xl font-bold text-blue-900 flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">📋</span>
                </div>
                Patient Medical History
              </h3>
              <p className="text-sm text-blue-700 mt-1">Complete medical records and history</p>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <PatientHistory />
            </div>
          </div>

          {/* Right Panel - SOAP Notes and E-Prescription */}
          <div className="card flex flex-col">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-100 rounded-t-xl">
              <div className="flex space-x-6">
                <button
                  onClick={() => setActiveTab('notes')}
                  className={`flex items-center space-x-2 pb-3 px-4 font-semibold transition-all ${
                    activeTab === 'notes'
                      ? 'text-green-700 border-b-3 border-green-500 bg-white rounded-t-lg shadow-sm'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  <span className="text-lg">📝</span>
                  <span>SOAP Notes</span>
                </button>
                <button
                  onClick={() => setActiveTab('prescription')}
                  className={`flex items-center space-x-2 pb-3 px-4 font-semibold transition-all ${
                    activeTab === 'prescription'
                      ? 'text-green-700 border-b-3 border-green-500 bg-white rounded-t-lg shadow-sm'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  <span className="text-lg">💊</span>
                  <span>E-Prescription</span>
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'notes' && <SOAPNotes />}
              {activeTab === 'prescription' && <EPrescription />}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ConsultationRoom component error:', error);
    return null;
  }
}

export default ConsultationRoom;