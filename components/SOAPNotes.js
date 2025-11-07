import React from 'react';

function SOAPNotes() {
  try {
    const [notes, setNotes] = React.useState({
      subjective: '',
      objective: '',
      assessment: '',
      plan: ''
    });

    const handleChange = (field, value) => {
      setNotes(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
      console.log('Saving SOAP notes:', notes);
    };

    return (
      <div className="space-y-4" data-name="soap-notes" data-file="components/SOAPNotes.js">
        <div>
          <label className="block text-sm font-medium mb-2">Subjective</label>
          <textarea
            value={notes.subjective}
            onChange={(e) => handleChange('subjective', e.target.value)}
            placeholder="Patient's complaints and symptoms..."
            className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg h-24 resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Objective</label>
          <textarea
            value={notes.objective}
            onChange={(e) => handleChange('objective', e.target.value)}
            placeholder="Physical examination findings..."
            className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg h-24 resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Assessment</label>
          <textarea
            value={notes.assessment}
            onChange={(e) => handleChange('assessment', e.target.value)}
            placeholder="Diagnosis and clinical impression..."
            className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg h-24 resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Plan</label>
          <textarea
            value={notes.plan}
            onChange={(e) => handleChange('plan', e.target.value)}
            placeholder="Treatment plan and follow-up..."
            className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg h-24 resize-none"
          />
        </div>

        <button onClick={handleSave} className="w-full btn-primary">
          Save SOAP Notes
        </button>
      </div>
    );
  } catch (error) {
    console.error('SOAPNotes component error:', error);
    return null;
  }
}

export default SOAPNotes;