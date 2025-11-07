import React from 'react';

function Settings() {
  try {
    const [activeTab, setActiveTab] = React.useState('profile');

    return (
      <div data-name="settings" data-file="components/Settings.js">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Settings</h2>
          <p className="text-[var(--text-muted)]">Manage your account and preferences</p>
        </div>

        <div className="card">
          <div className="flex space-x-6 mb-6 border-b border-[var(--border-color)]">
            <button
              onClick={() => setActiveTab('profile')}
              className={`pb-3 px-2 font-medium ${activeTab === 'profile' ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-[var(--text-muted)]'}`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`pb-3 px-2 font-medium ${activeTab === 'notifications' ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-[var(--text-muted)]'}`}
            >
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`pb-3 px-2 font-medium ${activeTab === 'security' ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-[var(--text-muted)]'}`}
            >
              Security
            </button>
          </div>

          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input type="text" defaultValue="Dr. John Gondo" className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Specialization</label>
                  <input type="text" defaultValue="Cardiologist" className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" defaultValue="dr.gondo@parenyatwa.com" className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input type="tel" defaultValue="+263 771 234 567" className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg" />
              </div>
              <button className="btn-primary">Save Changes</button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <span>Email notifications for new appointments</span>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </label>
              <label className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <span>SMS reminders before consultations</span>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </label>
              <label className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <span>WhatsApp notifications</span>
                <input type="checkbox" className="w-5 h-5" />
              </label>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Current Password</label>
                <input type="password" className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">New Password</label>
                <input type="password" className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <input type="password" className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg" />
              </div>
              <button className="btn-primary">Update Password</button>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Settings component error:', error);
    return null;
  }
}

export default Settings;