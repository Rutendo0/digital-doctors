import React from 'react';
import { FileText, Shield, CheckCircle } from 'lucide-react';
import { medicationDatabase } from '../utils/medicationDatabase';

function EPrescription() {
  try {
    const [medications, setMedications] = React.useState([]);
    const [currentMed, setCurrentMed] = React.useState({
      name: '',
      dosage: '',
      frequency: '',
      duration: ''
    });
    const [suggestions, setSuggestions] = React.useState([]);
    const [isSigned, setIsSigned] = React.useState(false);

    const handleMedicationChange = (value) => {
      setCurrentMed(prev => ({ ...prev, name: value }));
      if (value.length > 2) {
        const filtered = medicationDatabase.filter(med => 
          med.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered.slice(0, 5));
      } else {
        setSuggestions([]);
      }
    };

    const addMedication = () => {
      if (currentMed.name && currentMed.dosage && currentMed.frequency && currentMed.duration) {
        setMedications(prev => [...prev, currentMed]);
        setCurrentMed({ name: '', dosage: '', frequency: '', duration: '' });
        setSuggestions([]);
      }
    };

    const applyDigitalSignature = () => {
      // Simulate digital signature process
      setIsSigned(true);
      alert('Digital signature applied successfully');
    };

    const issuePrescription = () => {
      if (medications.length === 0) {
        alert('Please add at least one medication before issuing prescription');
        return;
      }
      if (!isSigned) {
        alert('Please apply digital signature before issuing prescription');
        return;
      }

      const prescriptionData = {
        medications,
        doctor: 'Dr. John Gondo',
        license: 'MD123456',
        issuedAt: new Date().toISOString(),
        signature: 'Digital Signature Applied',
        patient: 'Current Patient',
        prescriptionId: `RX-${Date.now()}`
      };

      console.log('Issuing digitally signed e-prescription:', prescriptionData);
      alert('E-Prescription issued successfully and sent to patient portal');

      // Reset form
      setMedications([]);
      setIsSigned(false);
    };

    return (
      <div className="space-y-4" data-name="e-prescription" data-file="components/EPrescription.js">
        <div className="relative">
          <label className="block text-sm font-medium mb-2">Medication Name</label>
          <input
            type="text"
            value={currentMed.name}
            onChange={(e) => handleMedicationChange(e.target.value)}
            placeholder="Start typing medication name..."
            className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg"
          />
          {suggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-[var(--border-color)] rounded-lg shadow-lg">
              {suggestions.map((med, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setCurrentMed(prev => ({ ...prev, name: med }));
                    setSuggestions([]);
                  }}
                  className="px-3 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  {med}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-sm font-medium mb-2">Dosage</label>
            <input
              type="text"
              value={currentMed.dosage}
              onChange={(e) => setCurrentMed(prev => ({ ...prev, dosage: e.target.value }))}
              placeholder="e.g., 500mg"
              className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Frequency</label>
            <input
              type="text"
              value={currentMed.frequency}
              onChange={(e) => setCurrentMed(prev => ({ ...prev, frequency: e.target.value }))}
              placeholder="e.g., Twice daily"
              className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Duration</label>
            <input
              type="text"
              value={currentMed.duration}
              onChange={(e) => setCurrentMed(prev => ({ ...prev, duration: e.target.value }))}
              placeholder="e.g., 7 days"
              className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg"
            />
          </div>
        </div>

        <button onClick={addMedication} className="w-full btn-secondary">
          Add Medication
        </button>

        {medications.length > 0 && (
          <div className="border border-[var(--border-color)] rounded-lg p-4 space-y-2">
            <h4 className="font-semibold mb-3">Prescribed Medications</h4>
            {medications.map((med, idx) => (
              <div key={idx} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{med.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    {med.dosage} • {med.frequency} • {med.duration}
                  </p>
                </div>
                <button
                  onClick={() => setMedications(prev => prev.filter((_, i) => i !== idx))}
                  className="text-red-500 hover:text-red-700"
                >
                  <div className="icon-x text-lg"></div>
                </button>
              </div>
            ))}
          </div>
        )}

        {medications.length > 0 && (
          <div className="space-y-3">
            {!isSigned ? (
              <button onClick={applyDigitalSignature} className="w-full btn-secondary flex items-center justify-center space-x-2">
                <Shield className="text-lg" />
                <span>Apply Digital Signature</span>
              </button>
            ) : (
              <div className="flex items-center justify-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="text-green-600" />
                <span className="text-green-700 font-medium">Digitally Signed</span>
              </div>
            )}

            <button
              onClick={issuePrescription}
              className="w-full btn-primary flex items-center justify-center space-x-2"
              disabled={!isSigned}
            >
              <FileText className="text-lg text-white" />
              <span>Issue Prescription</span>
            </button>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('EPrescription component error:', error);
    return null;
  }
}

export default EPrescription;
