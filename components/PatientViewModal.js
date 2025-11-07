import React from 'react';
import { X, Mail, Phone, MapPin, Calendar, Heart, Activity, FileText, Clock } from 'lucide-react';

function PatientViewModal({ patient, onClose }) {
  try {
    // Mock complete patient data - in real app this would come from API
    const patientData = {
      ...patient,
      email: `${patient.name.toLowerCase().replace(' ', '.')}@email.com`,
      phone: '+263 771 234 567',
      address: 'Harare, Zimbabwe',
      gender: patient.id % 2 === 0 ? 'Male' : 'Female',
      allergies: patient.id === 1 ? ['Penicillin', 'Sulfa drugs'] : patient.id === 2 ? ['None'] : ['Aspirin'],
      conditions: patient.id === 1 ? ['Type 2 Diabetes', 'Hypertension'] : patient.id === 2 ? ['Hypertension'] : ['Asthma'],
      medications: patient.id === 1 ? ['Metformin 500mg', 'Lisinopril 10mg'] : patient.id === 2 ? ['Amlodipine 5mg'] : ['Albuterol inhaler'],
      emergencyContact: {
        name: 'John Tebda',
        relationship: 'Spouse',
        phone: '+263 771 987 654'
      },
      insurance: {
        provider: 'Medical Aid Society',
        policyNumber: 'MAS123456789',
        expiryDate: '2026-12-31'
      },
      visits: [
        {
          date: patient.lastVisit,
          type: 'Regular Checkup',
          doctor: 'Dr. John Gondo',
          notes: 'Patient reports feeling well. Blood pressure stable.',
          vitals: { bp: '120/80', hr: '72', temp: '36.5°C' }
        },
        {
          date: '2025-10-15',
          type: 'Follow-up',
          doctor: 'Dr. John Gondo',
          notes: 'Medication adjustment discussed. Patient compliant.',
          vitals: { bp: '125/82', hr: '75', temp: '36.7°C' }
        },
        {
          date: '2025-09-20',
          type: 'Consultation',
          doctor: 'Dr. John Gondo',
          notes: 'Initial consultation for chronic condition management.',
          vitals: { bp: '130/85', hr: '78', temp: '36.6°C' }
        }
      ],
      labResults: [
        { test: 'Blood Glucose', value: '95 mg/dL', normal: '70-100 mg/dL', date: '2025-11-03' },
        { test: 'Cholesterol', value: '180 mg/dL', normal: '<200 mg/dL', date: '2025-11-03' },
        { test: 'Hemoglobin', value: '14.2 g/dL', normal: '12-16 g/dL', date: '2025-10-15' }
      ]
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-name="patient-view-modal" data-file="components/PatientViewModal.js">
        <div className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold text-text-dark">Patient Medical Record</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="text-xl text-text-muted" />
            </button>
          </div>

          {/* Patient Header */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6 border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                {patientData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-blue-900">{patientData.name}</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-blue-600" />
                    <span className="text-sm">{patientData.age} years old</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="text-red-500" />
                    <span className="text-sm">{patientData.bloodType}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity className="text-green-600" />
                    <span className="text-sm">{patientData.status}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{patientData.gender}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Contact & Basic Info */}
            <div className="space-y-4">
              <div className="card">
                <h5 className="font-semibold text-text-dark mb-3 flex items-center">
                  <Mail className="text-lg mr-2" />
                  Contact Information
                </h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-500 text-sm" />
                    <span className="text-sm">{patientData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-green-500 text-sm" />
                    <span className="text-sm">{patientData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-red-500 text-sm" />
                    <span className="text-sm">{patientData.address}</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h5 className="font-semibold text-text-dark mb-3">Emergency Contact</h5>
                <div className="space-y-1">
                  <p className="font-medium text-sm">{patientData.emergencyContact.name}</p>
                  <p className="text-xs text-text-muted">{patientData.emergencyContact.relationship}</p>
                  <p className="text-xs text-text-muted">{patientData.emergencyContact.phone}</p>
                </div>
              </div>

              <div className="card">
                <h5 className="font-semibold text-text-dark mb-3">Insurance</h5>
                <div className="space-y-1">
                  <p className="font-medium text-sm">{patientData.insurance.provider}</p>
                  <p className="text-xs text-text-muted">Policy: {patientData.insurance.policyNumber}</p>
                  <p className="text-xs text-text-muted">Expires: {new Date(patientData.insurance.expiryDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* Middle Column - Medical History */}
            <div className="space-y-4">
              <div className="card">
                <h5 className="font-semibold text-text-dark mb-3 flex items-center">
                  <Heart className="text-red-500 mr-2" />
                  Medical Conditions
                </h5>
                <div className="space-y-2">
                  {patientData.conditions.map((condition, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h5 className="font-semibold text-text-dark mb-3">Allergies</h5>
                <div className="flex flex-wrap gap-2">
                  {patientData.allergies.map((allergy, idx) => (
                    <span key={idx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card">
                <h5 className="font-semibold text-text-dark mb-3">Current Medications</h5>
                <div className="space-y-2">
                  {patientData.medications.map((med, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">{med}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Visit History & Lab Results */}
            <div className="space-y-4">
              <div className="card">
                <h5 className="font-semibold text-text-dark mb-3 flex items-center">
                  <Clock className="text-blue-500 mr-2" />
                  Recent Visits
                </h5>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {patientData.visits.map((visit, idx) => (
                    <div key={idx} className="border-l-4 border-blue-500 pl-3 py-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">{visit.type}</p>
                          <p className="text-xs text-text-muted">{new Date(visit.date).toLocaleDateString()}</p>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {visit.doctor}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted mt-1">{visit.notes}</p>
                      <div className="flex space-x-3 mt-1">
                        <span className="text-xs text-text-muted">BP: {visit.vitals.bp}</span>
                        <span className="text-xs text-text-muted">HR: {visit.vitals.hr}</span>
                        <span className="text-xs text-text-muted">Temp: {visit.vitals.temp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h5 className="font-semibold text-text-dark mb-3 flex items-center">
                  <FileText className="text-green-500 mr-2" />
                  Lab Results
                </h5>
                <div className="space-y-2">
                  {patientData.labResults.map((result, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <p className="font-medium text-sm">{result.test}</p>
                        <p className="text-xs text-text-muted">{new Date(result.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm">{result.value}</p>
                        <p className="text-xs text-green-600">{result.normal}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PatientViewModal component error:', error);
    return null;
  }
}

export default PatientViewModal;