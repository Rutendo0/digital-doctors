import React, { useState } from 'react';
import { Search, Bell, User, LogOut, Check } from 'lucide-react';

function Header({ currentView, onShowProfile }) {
  try {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([
      {
        id: 1,
        title: 'New Appointment Request',
        message: 'Sarah Johnson has requested an appointment for tomorrow at 2:00 PM',
        time: '5 minutes ago',
        read: false,
        type: 'appointment'
      },
      {
        id: 2,
        title: 'Lab Results Available',
        message: 'Lab results for Michael Brown are now available for review',
        time: '1 hour ago',
        read: false,
        type: 'lab'
      },
      {
        id: 3,
        title: 'Prescription Refill Request',
        message: 'Emma Wilson has requested a prescription refill',
        time: '2 hours ago',
        read: true,
        type: 'prescription'
      }
    ]);

    const unreadCount = notifications.filter(n => !n.read).length;

    const handleSignOut = () => {
      console.log('Signing out...');
      setShowDropdown(false);
    };

    const handleProfileClick = () => {
      onShowProfile();
      setShowDropdown(false);
    };

    const markAsRead = (id) => {
      setNotifications(prev =>
        prev.map(notification =>
          notification.id === id ? { ...notification, read: true } : notification
        )
      );
    };

    const markAllAsRead = () => {
      setNotifications(prev =>
        prev.map(notification => ({ ...notification, read: true }))
      );
    };

    const getTitle = () => {
      switch(currentView) {
        case 'dashboard': return 'Dashboard';
        case 'patients': return 'Patient Records';
        case 'analytics': return 'Practice Analytics';
        case 'settings': return 'Settings';
        case 'consultation': return 'Virtual Consultation';
        case 'appointments': return 'Appointments';
        default: return 'Dashboard';
      }
    };

    return (
      <header className="bg-white px-8 py-4 border-b border-border-color" data-name="header" data-file="components/Header.js">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="Search here..."
                className="w-full pl-10 pr-4 py-2.5 bg-bg-light border border-transparent rounded-lg text-sm focus:outline-none focus:border-arcus-blue-400 focus:ring-2 focus:ring-arcus-blue-100 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-arcus-blue-50 text-arcus-blue-600 rounded-lg text-sm font-medium hover:bg-arcus-blue-100 transition-all">
              {getTitle()}
            </button>

            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2.5 hover:bg-bg-light rounded-lg transition-all"
              >
                <Bell className="w-5 h-5 text-text-muted" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-arcus-red-500 rounded-full"></span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-arcus-lg border border-border-color z-50 max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-border-color">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-text-dark">Notifications</h3>
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-sm text-arcus-blue-600 hover:text-arcus-blue-700 font-medium"
                        >
                          Mark all read
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="divide-y divide-border-color">
                    {notifications.length === 0 ? (
                      <div className="p-4 text-center text-text-muted">
                        No notifications
                      </div>
                    ) : (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 hover:bg-bg-light transition-all cursor-pointer ${
                            !notification.read ? 'bg-arcus-blue-50' : ''
                          }`}
                          onClick={() => markAsRead(notification.id)}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <h4 className={`text-sm font-medium ${
                                !notification.read ? 'text-text-dark' : 'text-text-muted'
                              }`}>
                                {notification.title}
                              </h4>
                              <p className="text-sm text-text-muted mt-1">
                                {notification.message}
                              </p>
                              <p className="text-xs text-text-muted mt-2">{notification.time}</p>
                            </div>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-arcus-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 p-1.5 hover:bg-bg-light rounded-lg transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-blue flex items-center justify-center text-white font-semibold text-sm shadow-arcus-blue">
                  JG
                </div>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-arcus-lg border border-border-color z-50">
                  <button
                    onClick={handleProfileClick}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-bg-light rounded-t-xl transition-all"
                  >
                    <User className="w-4 h-4 text-text-muted" />
                    <span className="text-sm font-medium">Profile</span>
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-arcus-red-50 text-arcus-red-600 rounded-b-xl transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm font-medium">Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}

export default Header;
