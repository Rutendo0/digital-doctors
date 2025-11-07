import React, { useState } from 'react';
import { Clock, Plus, X, Save, Calendar } from 'lucide-react';

function AvailabilityManagement() {
  try {
    const [availabilitySlots, setAvailabilitySlots] = useState([
      { id: 1, day: 'Monday', startTime: '09:00', endTime: '17:00', recurring: true },
      { id: 2, day: 'Tuesday', startTime: '09:00', endTime: '17:00', recurring: true },
      { id: 3, day: 'Wednesday', startTime: '09:00', endTime: '17:00', recurring: true },
      { id: 4, day: 'Thursday', startTime: '09:00', endTime: '17:00', recurring: true },
      { id: 5, day: 'Friday', startTime: '09:00', endTime: '17:00', recurring: true }
    ]);
    const [blockedSlots, setBlockedSlots] = useState([
      { id: 1, date: '2025-11-15', startTime: '12:00', endTime: '13:00', reason: 'Lunch break' },
      { id: 2, date: '2025-11-20', startTime: '14:00', endTime: '16:00', reason: 'Conference call' }
    ]);
    const [newSlot, setNewSlot] = useState({ day: 'Monday', startTime: '09:00', endTime: '17:00', recurring: true });
    const [newBlock, setNewBlock] = useState({ date: '', startTime: '09:00', endTime: '17:00', reason: '' });

    const addAvailabilitySlot = () => {
      const newId = Math.max(...availabilitySlots.map(s => s.id)) + 1;
      setAvailabilitySlots([...availabilitySlots, { ...newSlot, id: newId }]);
      setNewSlot({ day: 'Monday', startTime: '09:00', endTime: '17:00', recurring: true });
    };

    const removeAvailabilitySlot = (id) => {
      setAvailabilitySlots(availabilitySlots.filter(slot => slot.id !== id));
    };

    const addBlockedSlot = () => {
      if (newBlock.date && newBlock.reason) {
        const newId = Math.max(...blockedSlots.map(s => s.id)) + 1;
        setBlockedSlots([...blockedSlots, { ...newBlock, id: newId }]);
        setNewBlock({ date: '', startTime: '09:00', endTime: '17:00', reason: '' });
      }
    };

    const removeBlockedSlot = (id) => {
      setBlockedSlots(blockedSlots.filter(slot => slot.id !== id));
    };

    const saveAvailabilitySettings = () => {
      // Save to backend and update public calendar
      console.log('Saving availability settings:', { availabilitySlots, blockedSlots });
      alert('Availability settings saved and public calendar updated!');
    };

    return (
      <div className="space-y-6" data-name="availability-management" data-file="components/AvailabilityManagement.js">
        {/* Recurring Availability */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Clock className="text-lg mr-2 text-blue-600" />
            Recurring Availability
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Set your regular weekly schedule. This will be visible to patients on the public calendar.
          </p>

          {/* Current Availability Slots */}
          <div className="space-y-3 mb-4">
            {availabilitySlots.map(slot => (
              <div key={slot.id} className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="text-green-600 text-sm" />
                  </div>
                  <div>
                    <p className="font-medium text-green-800">
                      Every {slot.day}: {slot.startTime} - {slot.endTime}
                    </p>
                    <p className="text-xs text-green-600">Recurring weekly</p>
                  </div>
                </div>
                <button
                  onClick={() => removeAvailabilitySlot(slot.id)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <X className="text-lg" />
                </button>
              </div>
            ))}
          </div>

          {/* Add New Availability Slot */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-3">Add New Availability Slot</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              <select
                value={newSlot.day}
                onChange={(e) => setNewSlot({...newSlot, day: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>
              <input
                type="time"
                value={newSlot.startTime}
                onChange={(e) => setNewSlot({...newSlot, startTime: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="time"
                value={newSlot.endTime}
                onChange={(e) => setNewSlot({...newSlot, endTime: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              />
              <button
                onClick={addAvailabilitySlot}
                className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                <Plus className="text-sm" />
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>

        {/* Time Blocking */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Calendar className="text-lg mr-2 text-red-600" />
            Time Blocking
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Block out specific dates and times when you won't be available.
          </p>

          {/* Current Blocked Slots */}
          <div className="space-y-3 mb-4">
            {blockedSlots.map(slot => (
              <div key={slot.id} className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="text-red-600 text-sm" />
                  </div>
                  <div>
                    <p className="font-medium text-red-800">
                      {new Date(slot.date).toLocaleDateString()}: {slot.startTime} - {slot.endTime}
                    </p>
                    <p className="text-xs text-red-600">{slot.reason}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeBlockedSlot(slot.id)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <X className="text-lg" />
                </button>
              </div>
            ))}
          </div>

          {/* Add New Blocked Slot */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-3">Block Time Slot</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
              <input
                type="date"
                value={newBlock.date}
                onChange={(e) => setNewBlock({...newBlock, date: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="time"
                value={newBlock.startTime}
                onChange={(e) => setNewBlock({...newBlock, startTime: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="time"
                value={newBlock.endTime}
                onChange={(e) => setNewBlock({...newBlock, endTime: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Reason (e.g., Meeting)"
                value={newBlock.reason}
                onChange={(e) => setNewBlock({...newBlock, reason: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              onClick={addBlockedSlot}
              className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              <Plus className="text-sm" />
              <span>Block Time</span>
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-4 border-t border-gray-200">
          <button
            onClick={saveAvailabilitySettings}
            className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
          >
            <Save className="text-lg" />
            <span>Save & Update Public Calendar</span>
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AvailabilityManagement component error:', error);
    return null;
  }
}

export default AvailabilityManagement;