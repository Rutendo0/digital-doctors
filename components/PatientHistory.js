function PatientHistory() {
  try {
    const patientData = {
      name: 'Sarah Moyo',
      age: 45,
      gender: 'Female',
      bloodType: 'A+',
      phone: '+263 771 234 567',
      email: 'sarah.m@email.com',
      allergies: ['Penicillin', 'Sulfa drugs'],
      conditions: ['Type 2 Diabetes', 'Hypertension'],
      lastVisit: '2025-10-15',
      medications: ['Metformin 500mg', 'Lisinopril 10mg'],
      previousVisits: [
        { date: '2025-10-15', reason: 'Routine checkup', doctor: 'Dr. John Gondo' },
        { date: '2025-09-20', reason: 'Blood pressure monitoring', doctor: 'Dr. John Gondo' },
        { date: '2025-08-10', reason: 'Diabetes follow-up', doctor: 'Dr. John Gondo' }
      ]
    };

    return (
      <div className="space-y-4 h-full overflow-y-auto" data-name="patient-history" data-file="components/PatientHistory.js">
        <div className="flex items-start space-x-4 pb-4 border-b border-[var(--border-color)]">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
            {patientData.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-lg text-[var(--text-dark)]">{patientData.name}</h4>
            <p className="text-sm text-[var(--text-muted)]">
              {patientData.age} years • {patientData.gender} • Blood Type: {patientData.bloodType}
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              <div className="icon-phone text-xs inline mr-1"></div>{patientData.phone}
            </p>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Allergies</h5>
          <div className="flex flex-wrap gap-2">
            {patientData.allergies.map((allergy, idx) => (
              <span key={idx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                {allergy}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Chronic Conditions</h5>
          <ul className="space-y-2">
            {patientData.conditions.map((condition, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <div className="icon-circle-dot text-sm text-[var(--primary-color)]"></div>
                <span className="text-sm">{condition}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Current Medications</h5>
          <ul className="space-y-2">
            {patientData.medications.map((med, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <div className="icon-pill text-sm text-[var(--secondary-color)]"></div>
                <span className="text-sm">{med}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 border-t border-[var(--border-color)]">
          <h5 className="font-semibold mb-3 text-[var(--text-dark)]">Previous Visits</h5>
          <div className="space-y-2">
            {patientData.previousVisits.map((visit, idx) => (
              <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-[var(--text-dark)]">{visit.reason}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  {new Date(visit.date).toLocaleDateString()} • {visit.doctor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PatientHistory component error:', error);
    return null;
  }
}

export default PatientHistory;