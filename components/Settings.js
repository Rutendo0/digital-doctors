import React from 'react';
import { User, Bell, Shield, Save } from 'lucide-react';

function Settings() {
  try {
    const [activeTab, setActiveTab] = React.useState('profile');

    const tabs = [
      { id: 'profile', label: 'Profile', icon: User },
      { id: 'notifications', label: 'Notifications', icon: Bell },
      { id: 'security', label: 'Security', icon: Shield }
    ];

    return (
      <div className="space-y-6" data-name="settings" data-file="components/Settings.js">
        <div>
          <h2 className="text-2xl font-bold text-text-dark">Settings</h2>
          <p className="text-text-muted mt-1">Manage your account and preferences</p>
        </div>

        <div className="card">
          <div className="flex gap-2 mb-6 border-b border-border-color pb-4">
            {tabs.map(tab => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-blue text-white shadow-arcus-blue'
                      : 'text-text-muted hover:bg-arcus-blue-50 hover:text-arcus-blue-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-arcus-blue-50 to-arcus-purple-50 rounded-xl">
                <div className="w-20 h-20 rounded-full bg-gradient-blue flex items-center justify-center text-white font-bold text-2xl shadow-arcus-blue">
                  JG
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-dark">Dr. John Gondo</h3>
                  <p className="text-text-muted">Cardiologist</p>
                  <p className="text-sm text-text-muted mt-1">Member since November 2025</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-text-dark">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue="Dr. John Gondo" 
                    className="w-full px-4 py-2.5 bg-bg-light border border-transparent rounded-lg focus:outline-none focus:border-arcus-blue-400 focus:ring-2 focus:ring-arcus-blue-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-text-dark">Specialization</label>
                  <input 
                    type="text" 
                    defaultValue="Cardiologist" 
                    className="w-full px-4 py-2.5 bg-bg-light border border-transparent rounded-lg focus:outline-none focus:border-arcus-blue-400 focus:ring-2 focus:ring-arcus-blue-100 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-text-dark">Email</label>
                <input 
                  type="email" 
                  defaultValue="dr.gondo@parenyatwa.com" 
                  className="w-full px-4 py-2.5 bg-bg-light border border-transparent rounded-lg focus:outline-none focus:border-arcus-blue-400 focus:ring-2 focus:ring-arcus-blue-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-text-dark">Phone</label>
                <input 
                  type="tel" 
                  defaultValue="+263 771 234 567" 
                  className="w-full px-4 py-2.5 bg-bg-light border border-transparent rounded-lg focus:outline-none focus:border-arcus-blue-400 focus:ring-2 focus:ring-arcus-blue-100 transition-all"
                />
              </div>
              <button className="btn-primary flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-3">
              <p className="text-sm text-text-muted mb-4">Choose how you want to receive notifications</p>
              {[
                { label: 'Email notifications for new appointments', checked: true },
                { label: 'SMS reminders before consultations', checked: true },
                { label: 'WhatsApp notifications', checked: false },
                { label: 'Push notifications for urgent matters', checked: true },
                { label: 'Weekly summary reports', checked: false }
              ].map((item, idx) => (
                <label key={idx} className="flex items-center justify-between p-4 bg-bg-light hover:bg-arcus-blue-50 rounded-lg cursor-pointer transition-all group">
                  <span className="text-sm text-text-dark font-medium group-hover:text-arcus-blue-700">{item.label}</span>
                  <input 
                    type="checkbox" 
                    defaultChecked={item.checked} 
                    className="w-5 h-5 rounded border-border-color text-arcus-blue-600 focus:ring-2 focus:ring-arcus-blue-100"
                  />
                </label>
              ))}
              <button className="btn-primary flex items-center gap-2 mt-6">
                <Save className="w-4 h-4" />
                Save Preferences
              </button>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="p-4 bg-arcus-orange-50 border border-arcus-orange-200 rounded-xl">
                <p className="text-sm text-arcus-orange-800 font-medium">
                  🔒 Keep your account secure by using a strong password and enabling two-factor authentication
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-text-dark">Current Password</label>
                <input 
                  type="password" 
                  placeholder="Enter current password"
                  className="w-full px-4 py-2.5 bg-bg-light border border-transparent rounded-lg focus:outline-none focus:border-arcus-blue-400 focus:ring-2 focus:ring-arcus-blue-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-text-dark">New Password</label>
                <input 
                  type="password" 
                  placeholder="Enter new password"
                  className="w-full px-4 py-2.5 bg-bg-light border border-transparent rounded-lg focus:outline-none focus:border-arcus-blue-400 focus:ring-2 focus:ring-arcus-blue-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-text-dark">Confirm New Password</label>
                <input 
                  type="password" 
                  placeholder="Confirm new password"
                  className="w-full px-4 py-2.5 bg-bg-light border border-transparent rounded-lg focus:outline-none focus:border-arcus-blue-400 focus:ring-2 focus:ring-arcus-blue-100 transition-all"
                />
              </div>

              <div className="border-t border-border-color pt-6">
                <h4 className="text-sm font-semibold text-text-dark mb-3">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between p-4 bg-bg-light rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-text-dark">Enable 2FA</p>
                    <p className="text-xs text-text-muted mt-1">Add an extra layer of security to your account</p>
                  </div>
                  <button className="px-4 py-2 bg-arcus-green-100 text-arcus-green-700 rounded-lg font-medium text-sm hover:bg-arcus-green-200 transition-all">
                    Enable
                  </button>
                </div>
              </div>

              <button className="btn-primary flex items-center gap-2">
                <Save className="w-4 h-4" />
                Update Password
              </button>
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
