import React, { useState } from 'react';
import { Calendar, Clock, Bell, User, ChevronDown, LogOut, Check, X } from 'lucide-react';

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
      },
      {
        id: 4,
        title: 'System Maintenance',
        message: 'Scheduled maintenance will occur tonight from 11 PM to 1 AM',
        time: '1 day ago',
        read: true,
        type: 'system'
      }
    ]);

    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const unreadCount = notifications.filter(n => !n.read).length;

    const handleSignOut = () => {
      // Handle sign out logic here
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

    const getNotificationIcon = (type) => {
      switch (type) {
        case 'appointment': return '📅';
        case 'lab': return '🧪';
        case 'prescription': return '💊';
        case 'system': return '⚙️';
        default: return '🔔';
      }
    };

    const getTitle = () => {
      switch(currentView) {
        case 'dashboard': return 'Dashboard';
        case 'patients': return 'Patient Records';
        case 'analytics': return 'Practice Analytics';
        case 'settings': return 'Settings';
        case 'consultation': return 'Virtual Consultation';
        default: return 'Dashboard';
      }
    };

    return (
      <header className="bg-white px-8 py-6 border-b border-border-color" data-name="header" data-file="components/Header.js">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-text-dark">{getTitle()}</h2>
            <div className="text-sm text-text-muted mt-2 flex items-center space-x-2">
              <Calendar className="text-xs" />
              <span>{today}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">

            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2.5 hover:bg-gray-50 rounded-lg transition-all"
              >
                <Bell className="text-xl text-text-muted" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-border-color z-50 max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-border-color">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-text-dark">Notifications</h3>
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-sm text-primary hover:text-primary-dark font-medium"
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
                          className={`p-4 hover:bg-gray-50 transition-all ${
                            !notification.read ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="text-lg">{getNotificationIcon(notification.type)}</div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between">
                                <h4 className={`text-sm font-medium truncate ${
                                  !notification.read ? 'text-text-dark' : 'text-text-muted'
                                }`}>
                                  {notification.title}
                                </h4>
                                {!notification.read && (
                                  <button
                                    onClick={() => markAsRead(notification.id)}
                                    className="ml-2 p-1 hover:bg-gray-200 rounded transition-all"
                                    title="Mark as read"
                                  >
                                    <Check className="text-xs text-green-600" />
                                  </button>
                                )}
                              </div>
                              <p className={`text-sm mt-1 ${
                                !notification.read ? 'text-text-dark' : 'text-text-muted'
                              }`}>
                                {notification.message}
                              </p>
                              <p className="text-xs text-text-muted mt-2">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {notifications.length > 0 && (
                    <div className="p-3 border-t border-border-color text-center">
                      <button className="text-sm text-primary hover:text-primary-dark font-medium">
                        View all notifications
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                  JS
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-sm text-text-dark">Dr. John Gondo</p>
                  <p className="text-xs text-text-muted">Cardiologist</p>
                </div>
                <ChevronDown className={`text-lg text-text-muted transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border-color z-50">
                  <button
                    onClick={handleProfileClick}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-t-lg transition-all"
                  >
                    <User className="text-lg text-text-muted" />
                    <span className="text-sm font-medium">Profile</span>
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-red-50 text-red-600 rounded-b-lg transition-all"
                  >
                    <LogOut className="text-lg" />
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
