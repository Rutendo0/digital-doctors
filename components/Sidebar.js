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
      <div className="w-64 bg-white flex flex-col border-r border-border-color" data-name="sidebar" data-file="components/Sidebar.js">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-blue flex items-center justify-center shadow-arcus-blue">
              <Hospital className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-text-dark">ARCUS</h1>
              <p className="text-xs text-text-muted">Hospital Portal</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-2">
          <div className="space-y-1">
            {menuItems.map(item => {
              const IconComponent = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`sidebar-item w-full ${isActive ? 'active' : ''}`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-border-color mt-auto">
          <div className="flex items-center space-x-3 p-2">
            <div className="w-10 h-10 rounded-full bg-gradient-blue flex items-center justify-center text-white font-semibold text-sm shadow-arcus-blue">
              JG
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
