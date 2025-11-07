import React from 'react';

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
      <div data-name="patients" data-file="components/Patients.js">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Patient Management</h2>
          <p className="text-[var(--text-muted)]">View and manage your patient records</p>
        </div>

        <div className="card mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <div className="icon-search absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)]"></div>
              <input
                type="text"
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[var(--border-color)] rounded-lg"
              />
            </div>
            <button className="btn-primary flex items-center space-x-2">
              <div className="icon-user-plus text-lg"></div>
              <span>Add Patient</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border-color)]">
                  <th className="text-left py-3 px-4 font-semibold">Patient Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Age</th>
                  <th className="text-left py-3 px-4 font-semibold">Blood Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Last Visit</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map(patient => (
                  <tr key={patient.id} className="border-b border-[var(--border-color)] hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                        <span className="font-medium">{patient.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{patient.age}</td>
                    <td className="py-3 px-4">{patient.bloodType}</td>
                    <td className="py-3 px-4">{new Date(patient.lastVisit).toLocaleDateString()}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        patient.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => onViewPatient && onViewPatient(patient)}
                        className="text-[var(--primary-color)] hover:underline"
                      >
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