function AvailabilityModal({ onClose }) {
  try {
    const [availabilitySlots, setAvailabilitySlots] = React.useState([
      { id: 1, days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], startTime: '09:00', endTime: '17:00', isRecurring: true }
    ]);
    const [currentSlot, setCurrentSlot] = React.useState({
      days: [],
      startTime: '09:00',
      endTime: '17:00',
      isRecurring: true
    });

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const toggleDay = (day) => {
      setCurrentSlot(prev => ({
        ...prev,
        days: prev.days.includes(day) ? prev.days.filter(d => d !== day) : [...prev.days, day]
      }));
    };

    const addAvailabilitySlot = () => {
      if (currentSlot.days.length > 0) {
        setAvailabilitySlots(prev => [...prev, { ...currentSlot, id: Date.now() }]);
        setCurrentSlot({
          days: [],
          startTime: '09:00',
          endTime: '17:00',
          isRecurring: true
        });
      }
    };

    const removeSlot = (id) => {
      setAvailabilitySlots(prev => prev.filter(slot => slot.id !== id));
    };

    const handleSave = () => {
      console.log('Saving availability slots:', availabilitySlots);
      // Here you would typically save to backend and update public calendar
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-name="availability-modal" data-file="components/AvailabilityModal.js">
        <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Manage Availability</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <div className="icon-x text-xl text-[var(--text-muted)]"></div>
            </button>
          </div>

          <div className="space-y-6">
            {/* Current Availability Slots */}
            <div>
              <h4 className="font-semibold mb-3">Current Availability</h4>
              <div className="space-y-3">
                {availabilitySlots.map(slot => (
                  <div key={slot.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{slot.days.join(', ')}</p>
                      <p className="text-sm text-text-muted">
                        {slot.startTime} - {slot.endTime}
                        {slot.isRecurring && <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Recurring</span>}
                      </p>
                    </div>
                    <button
                      onClick={() => removeSlot(slot.id)}
                      className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-all"
                    >
                      <div className="icon-x text-lg"></div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Add New Slot */}
            <div className="border-t pt-6">
              <h4 className="font-semibold mb-3">Add New Availability Slot</h4>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Days</label>
                  <div className="grid grid-cols-2 gap-2">
                    {days.map(day => (
                      <label key={day} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
                        <input
                          type="checkbox"
                          checked={currentSlot.days.includes(day)}
                          onChange={() => toggleDay(day)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Start Time</label>
                    <input
                      type="time"
                      value={currentSlot.startTime}
                      onChange={(e) => setCurrentSlot(prev => ({ ...prev, startTime: e.target.value }))}
                      className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">End Time</label>
                    <input
                      type="time"
                      value={currentSlot.endTime}
                      onChange={(e) => setCurrentSlot(prev => ({ ...prev, endTime: e.target.value }))}
                      className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg"
                    />
                  </div>
                </div>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentSlot.isRecurring}
                    onChange={(e) => setCurrentSlot(prev => ({ ...prev, isRecurring: e.target.checked }))}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Recurring weekly</span>
                </label>

                <button onClick={addAvailabilitySlot} className="w-full btn-secondary">
                  Add Availability Slot
                </button>
              </div>
            </div>

            <div className="border-t pt-6 flex space-x-3">
              <button onClick={handleSave} className="flex-1 btn-primary">
                Save All Changes
              </button>
              <button onClick={onClose} className="px-6 py-2 border border-border-color rounded-lg hover:bg-gray-50 transition-all">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AvailabilityModal component error:', error);
    return null;
  }
}

export default AvailabilityModal;