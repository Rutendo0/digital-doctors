import React from 'react';
import { LayoutDashboard, Users, BarChart3, Settings, Hospital, Calendar } from 'lucide-react';

function Sidebar({ currentView, setCurrentView }) {
  try {
    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'appointments', label: 'Appointments', icon: Calendar },
      { id: 'patients', label: 'Patients', icon: Users },
      { id: 'analytics', label: 'Analytics', icon: BarChart3 },
      { id: 'settings', label: 'Settings', icon: Settings }
    ];

    return (
      <div className="w-64 bg-white flex flex-col" data-name="sidebar" data-file="components/Sidebar.js">
        <div className="p-6 border-b border-border-color">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Hospital className="text-xl text-white" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-text-dark">Parirenyatwa</h1>
              <p className="text-xs text-text-muted">Hospital Portal</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          {menuItems.map(item => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                  currentView === item.id
                    ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-primary font-semibold shadow-sm'
                    : 'text-text-muted hover:bg-gray-50 hover:text-text-dark font-medium'
                }`}
              >
                <IconComponent className={`text-xl ${currentView === item.id ? 'scale-110' : ''} transition-transform`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border-color mt-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
              JS
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm text-text-dark">Dr. John Gondo</p>
              <p className="text-xs text-text-muted">Cardiologist</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}

export default Sidebar;
