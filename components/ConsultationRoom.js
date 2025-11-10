import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Video,
  ArrowLeft,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Monitor,
  Share,
  FileText,
  Heart,
  Activity,
  Clock,
  User,
  Calendar,
  Stethoscope
} from 'lucide-react';
import PatientHistory from './PatientHistory';
import SOAPNotes from './SOAPNotes';
import EPrescription from './EPrescription';

function ConsultationRoom({ appointment, onBack }) {
  try {
    const [activeTab, setActiveTab] = useState('notes');
    const [isVideoCallActive, setIsVideoCallActive] = useState(false);
    const [isMicOn, setIsMicOn] = useState(true);
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isScreenSharing, setIsScreenSharing] = useState(false);
    const [callStartTime] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update consultation timer every second
    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    const startWhatsAppCall = () => {
      const phoneNumber = '+263771234567';
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    const startVideoCall = () => {
      setIsVideoCallActive(true);
    };

    const endCall = () => {
      setIsVideoCallActive(false);
    };

    const toggleMicrophone = () => {
      setIsMicOn(!isMicOn);
    };

    const toggleCamera = () => {
      setIsCameraOn(!isCameraOn);
    };

    const toggleScreenShare = () => {
      setIsScreenSharing(!isScreenSharing);
    };

    const formatConsultationTime = () => {
      const diff = currentTime - callStartTime;
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // Mock vital signs - in real app, these would come from patient data
    const [isNormalHeartRate, setIsNormalHeartRate] = useState(true);
    const [isNormalBP, setIsNormalBP] = useState(true);

    return (
      <div className="h-screen bg-gray-50 flex flex-col" data-name="consultation-room" data-file="components/ConsultationRoom.js">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                disabled={isVideoCallActive}
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Virtual Consultation</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{appointment.patient}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{appointment.type}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{formatConsultationTime()}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {!isVideoCallActive ? (
                <>
                  <button
                    onClick={startVideoCall}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
                  >
                    <Video className="w-4 h-4" />
                    <span>Start Video Call</span>
                  </button>
                  <button
                    onClick={startWhatsAppCall}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Consultation</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Left Sidebar - Video & Controls */}
          {isVideoCallActive && (
            <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Video Call</h3>
              </div>
              
              {/* Video Area */}
              <div className="flex-1 bg-gray-900 m-4 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">{appointment.patient.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <h4 className="text-lg font-semibold">{appointment.patient}</h4>
                    <p className="text-sm text-gray-300">Video call in progress</p>
                  </div>
                </div>
              </div>

              {/* Video Controls */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-3">
                  <button
                    onClick={toggleMicrophone}
                    className={`p-3 rounded-full transition-all ${
                      isMicOn
                        ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                        : 'bg-red-500 hover:bg-red-600 text-white'
                    }`}
                  >
                    {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                  </button>
                  
                  <button
                    onClick={toggleCamera}
                    className={`p-3 rounded-full transition-all ${
                      isCameraOn
                        ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                        : 'bg-red-500 hover:bg-red-600 text-white'
                    }`}
                  >
                    {isCameraOn ? <Camera className="w-5 h-5" /> : <CameraOff className="w-5 h-5" />}
                  </button>
                  
                  <button
                    onClick={toggleScreenShare}
                    className={`p-3 rounded-full transition-all ${
                      isScreenSharing
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    <Monitor className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={endCall}
                    className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all"
                  >
                    <Phone className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <div className="flex-1 flex overflow-hidden">
            {/* Patient Information Panel */}
            <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100">
                <h3 className="font-semibold text-blue-900">Patient Overview</h3>
              </div>
              
              <div className="p-4 space-y-4">
                {/* Patient Avatar & Basic Info */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-white">{appointment.patient.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">{appointment.patient}</h4>
                  <p className="text-sm text-gray-600">{appointment.type}</p>
                </div>

                {/* Vital Signs */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-red-500" />
                    Vital Signs
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Heart Rate</span>
                      <span className={isNormalHeartRate ? 'text-green-600' : 'text-red-600'}>72 bpm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Blood Pressure</span>
                      <span className={isNormalBP ? 'text-green-600' : 'text-red-600'}>120/80</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Temperature</span>
                      <span className="text-gray-900">36.5°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">SpO2</span>
                      <span className="text-green-600">98%</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                    <Activity className="w-4 h-4 mr-2 text-blue-500" />
                    Recent Activity
                  </h5>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Last checkup: 3 months ago</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Lab results: Normal</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Prescription refill due</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Records */}
            <div className="flex-1 bg-white flex flex-col">
              <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100">
                <h3 className="font-semibold text-blue-900 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Medical Records
                </h3>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4">
                <PatientHistory />
              </div>
            </div>

            {/* Consultation Notes */}
            <div className="w-96 bg-white flex flex-col">
              <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-green-100">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setActiveTab('notes')}
                    className={`flex items-center space-x-2 pb-2 px-3 font-medium transition-all border-b-2 ${
                      activeTab === 'notes'
                        ? 'text-green-700 border-green-500'
                        : 'text-gray-600 border-transparent hover:text-green-600'
                    }`}
                  >
                    <span>SOAP Notes</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('prescription')}
                    className={`flex items-center space-x-2 pb-2 px-3 font-medium transition-all border-b-2 ${
                      activeTab === 'prescription'
                        ? 'text-green-700 border-green-500'
                        : 'text-gray-600 border-transparent hover:text-green-600'
                    }`}
                  >
                    <span>E-Prescription</span>
                  </button>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4">
                {activeTab === 'notes' && <SOAPNotes />}
                {activeTab === 'prescription' && <EPrescription />}
              </div>
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