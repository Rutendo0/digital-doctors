import React from 'react';
import { Search, UserPlus, Eye } from 'lucide-react';

function Patients({ onViewPatient }) {
  try {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [patients] = React.useState([
      { id: 1, name: 'Sarah Moyo', age: 45, bloodType: 'A+', lastVisit: '2025-11-03', status: 'Active' },
      { id: 2, name: 'Michael Kondo', age: 38, bloodType: 'O+', lastVisit: '2025-11-05', status: 'Active' },
      { id: 3, name: 'Emma Kudya', age: 29, bloodType: 'B+', lastVisit: '2025-10-28', status: 'Active' },
      { id: 4, name: 'James Moyo', age: 52, bloodType: 'AB+', lastVisit: '2025-11-01', status: 'Active' },
      { id: 5, name: 'Lisa Sibanda', age: 34, bloodType: 'A-', lastVisit: '2025-10-25', status: 'Inactive' }
    ]);

    const filteredPatients = patients.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6" data-name="patients" data-file="components/Patients.js">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-dark">Patient Management</h2>
            <p className="text-text-muted mt-1">View and manage your patient records</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div className="metric-card bg-gradient-blue">
            <div className="gradient-overlay"></div>
            <div className="relative z-10">
              <p className="text-sm font-medium text-white/90 mb-1">Total Patients</p>
              <h3 className="text-4xl font-bold mb-1">{patients.length}</h3>
              <p className="text-xs text-white/70">All registered patients</p>
            </div>
          </div>
          <div className="metric-card bg-gradient-green">
            <div className="gradient-overlay"></div>
            <div className="relative z-10">
              <p className="text-sm font-medium text-white/90 mb-1">Active Patients</p>
              <h3 className="text-4xl font-bold mb-1">{patients.filter(p => p.status === 'Active').length}</h3>
              <p className="text-xs text-white/70">Currently active</p>
            </div>
          </div>
          <div className="metric-card bg-gradient-purple">
            <div className="gradient-overlay"></div>
            <div className="relative z-10">
              <p className="text-sm font-medium text-white/90 mb-1">Blood Types</p>
              <h3 className="text-4xl font-bold mb-1">{new Set(patients.map(p => p.bloodType)).size}</h3>
              <p className="text-xs text-white/70">Different types</p>
            </div>
          </div>
          <div className="metric-card bg-gradient-blue-purple">
            <div className="gradient-overlay"></div>
            <div className="relative z-10">
              <p className="text-sm font-medium text-white/90 mb-1">Avg. Age</p>
              <h3 className="text-4xl font-bold mb-1">{Math.round(patients.reduce((sum, p) => sum + p.age, 0) / patients.length)}</h3>
              <p className="text-xs text-white/70">Years old</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-bg-light border border-transparent rounded-lg text-sm focus:outline-none focus:border-arcus-blue-400 focus:ring-2 focus:ring-arcus-blue-100 transition-all"
              />
            </div>
            <button className="btn-primary flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Add Patient
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-color">
                  <th className="text-left py-3 px-4 font-semibold text-text-dark text-sm">Patient Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-text-dark text-sm">Age</th>
                  <th className="text-left py-3 px-4 font-semibold text-text-dark text-sm">Blood Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-text-dark text-sm">Last Visit</th>
                  <th className="text-left py-3 px-4 font-semibold text-text-dark text-sm">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-text-dark text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map(patient => (
                  <tr key={patient.id} className="border-b border-border-color hover:bg-arcus-blue-50 transition-all">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-blue flex items-center justify-center text-white font-semibold text-xs shadow-arcus-blue">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-medium text-text-dark">{patient.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-text-muted">{patient.age}</td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-1 bg-arcus-red-100 text-arcus-red-700 rounded-full text-xs font-semibold">
                        {patient.bloodType}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-text-muted">{new Date(patient.lastVisit).toLocaleDateString()}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        patient.status === 'Active' 
                          ? 'bg-arcus-green-100 text-arcus-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => onViewPatient && onViewPatient(patient)}
                        className="flex items-center gap-1.5 text-arcus-blue-600 hover:text-arcus-blue-700 font-medium text-sm transition-all"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Patients component error:', error);
    return null;
  }
}

export default Patients;
