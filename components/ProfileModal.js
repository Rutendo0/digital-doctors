import React from 'react';
import { X, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';

function ProfileModal({ onClose }) {
  try {
    const doctorProfile = {
      name: 'Dr. John Gondo',
      specialty: 'Cardiologist',
      license: 'MD123456',
      email: 'dr.gondo@hospital.com',
      phone: '+263 771 234 567',
      address: 'Parirenyatwa Hospital, Harare, Zimbabwe',
      experience: '15 years',
      education: 'University of Zimbabwe Medical School',
      certifications: ['Board Certified Cardiologist', 'Advanced Cardiac Life Support', 'Echocardiography Certified'],
      languages: ['English', 'Shona'],
      joinDate: '2015-03-15'
    };

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" data-name="profile-modal" data-file="components/ProfileModal.js">
        <div className="bg-white rounded-xl shadow-arcus-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-border-color px-6 py-4 rounded-t-xl flex items-center justify-between">
            <h3 className="text-2xl font-bold text-text-dark">Doctor Profile</h3>
            <button onClick={onClose} className="p-2 hover:bg-bg-light rounded-lg transition-all">
              <X className="w-5 h-5 text-text-muted" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-arcus-blue-50 to-arcus-purple-50 rounded-xl">
              <div className="w-20 h-20 rounded-full bg-gradient-blue flex items-center justify-center text-white font-bold text-2xl shadow-arcus-blue overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/african-american-black-doctor-man-with-stethoscope-isolated-white-background_231208-2222.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Doctor Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-text-dark">{doctorProfile.name}</h4>
                <p className="text-lg text-arcus-blue-600 font-medium">{doctorProfile.specialty}</p>
                <p className="text-sm text-text-muted mt-1">License: {doctorProfile.license}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="w-4 h-4 text-text-muted" />
                  <span className="text-sm text-text-muted">
                    Joined {new Date(doctorProfile.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="font-semibold text-text-dark text-lg">Contact Information</h5>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-bg-light rounded-lg">
                    <Mail className="w-5 h-5 text-arcus-blue-500" />
                    <span className="text-sm text-text-dark">{doctorProfile.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-bg-light rounded-lg">
                    <Phone className="w-5 h-5 text-arcus-green-500" />
                    <span className="text-sm text-text-dark">{doctorProfile.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-bg-light rounded-lg">
                    <MapPin className="w-5 h-5 text-arcus-red-500" />
                    <span className="text-sm text-text-dark">{doctorProfile.address}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-text-dark text-lg">Professional Information</h5>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-bg-light rounded-lg">
                    <Award className="w-5 h-5 text-arcus-purple-500" />
                    <span className="text-sm text-text-dark">{doctorProfile.experience} experience</span>
                  </div>
                  <div className="p-3 bg-bg-light rounded-lg">
                    <p className="font-medium text-text-dark text-sm mb-1">Education:</p>
                    <p className="text-text-muted text-sm">{doctorProfile.education}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-text-dark mb-3">Certifications</h5>
              <div className="flex flex-wrap gap-2">
                {doctorProfile.certifications.map((cert, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-arcus-blue-100 text-arcus-blue-700 rounded-lg text-sm font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-text-dark mb-3">Languages</h5>
              <div className="flex flex-wrap gap-2">
                {doctorProfile.languages.map((lang, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-arcus-green-100 text-arcus-green-700 rounded-lg text-sm font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProfileModal component error:', error);
    return null;
  }
}

export default ProfileModal;
