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
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-name="profile-modal" data-file="components/ProfileModal.js">
        <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-text-dark">Doctor Profile</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="text-xl text-text-muted" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Profile Header */}
            <div className="flex items-start space-x-4 pb-6 border-b border-border-color">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                {doctorProfile.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-text-dark">{doctorProfile.name}</h4>
                <p className="text-lg text-primary font-medium">{doctorProfile.specialty}</p>
                <p className="text-sm text-text-muted">License: {doctorProfile.license}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Calendar className="text-sm text-text-muted" />
                  <span className="text-sm text-text-muted">
                    Joined {new Date(doctorProfile.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h5 className="font-semibold text-text-dark">Contact Information</h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-lg text-text-muted" />
                    <span className="text-sm">{doctorProfile.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-lg text-text-muted" />
                    <span className="text-sm">{doctorProfile.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-lg text-text-muted" />
                    <span className="text-sm">{doctorProfile.address}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="font-semibold text-text-dark">Professional Information</h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Award className="text-lg text-text-muted" />
                    <span className="text-sm">{doctorProfile.experience} experience</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-text-dark">Education:</p>
                    <p className="text-text-muted">{doctorProfile.education}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h5 className="font-semibold text-text-dark mb-3">Certifications</h5>
              <div className="flex flex-wrap gap-2">
                {doctorProfile.certifications.map((cert, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h5 className="font-semibold text-text-dark mb-3">Languages</h5>
              <div className="flex flex-wrap gap-2">
                {doctorProfile.languages.map((lang, idx) => (
                  <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
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