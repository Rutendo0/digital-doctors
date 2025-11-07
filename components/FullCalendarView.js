import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function FullCalendarView({ onAppointmentClick }) {
  try {
    const [currentView, setCurrentView] = useState('timeGridDay');
    const [currentDate, setCurrentDate] = useState(new Date());
    const calendarRef = React.useRef(null);

    const appointments = [
      {
        id: '1',
        title: 'Sarah Moyo - Cardiology',
        start: new Date().toISOString().split('T')[0] + 'T09:00:00',
        end: new Date().toISOString().split('T')[0] + 'T10:00:00',
        backgroundColor: '#3B82F6',
        borderColor: '#2563EB',
        extendedProps: {
          patient: 'Sarah Johnson',
          type: 'Cardiology',
          status: 'confirmed'
        }
      },
      {
        id: '2',
        title: 'Michael Kondo - General',
        start: new Date().toISOString().split('T')[0] + 'T10:30:00',
        end: new Date().toISOString().split('T')[0] + 'T11:30:00',
        backgroundColor: '#10B981',
        borderColor: '#059669',
        extendedProps: {
          patient: 'Michael Brown',
          type: 'General',
          status: 'completed'
        }
      },
      {
        id: '3',
        title: 'Emma Kudya - Pediatrics',
        start: new Date().toISOString().split('T')[0] + 'T14:00:00',
        end: new Date().toISOString().split('T')[0] + 'T15:00:00',
        backgroundColor: '#F59E0B',
        borderColor: '#D97706',
        extendedProps: {
          patient: 'Emma Kudya',
          type: 'Pediatrics',
          status: 'pending'
        }
      },
      {
        id: '4',
        title: 'James Moyo - Orthopedics',
        start: new Date().toISOString().split('T')[0] + 'T15:30:00',
        end: new Date().toISOString().split('T')[0] + 'T16:30:00',
        backgroundColor: '#EF4444',
        borderColor: '#DC2626',
        extendedProps: {
          patient: 'James Moyo',
          type: 'Orthopedics',
          status: 'cancelled'
        }
      }
    ];

    const handleEventClick = (info) => {
      const appointment = {
        id: info.event.id,
        patient: info.event.extendedProps.patient,
        type: info.event.extendedProps.type,
        start: info.event.start.toISOString(),
        status: info.event.extendedProps.status
      };
      onAppointmentClick(appointment);
    };

    const changeView = (viewName) => {
      setCurrentView(viewName);
      if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.changeView(viewName);
        setCurrentDate(calendarApi.getDate());
      }
    };

    const navigateDate = (direction) => {
      if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();
        if (direction === 'prev') {
          calendarApi.prev();
        } else if (direction === 'next') {
          calendarApi.next();
        } else if (direction === 'today') {
          calendarApi.today();
        }
        setCurrentDate(calendarApi.getDate());
      }
    };

    const getCurrentPeriod = () => {
      if (currentView === 'timeGridDay') {
        return currentDate.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      } else if (currentView === 'timeGridWeek') {
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        return `${startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
      } else if (currentView === 'dayGridMonth') {
        return currentDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long'
        });
      }
      return '';
    };

    const getStatusColor = (status) => {
      switch (status) {
        case 'confirmed': return '#3B82F6';
        case 'completed': return '#10B981';
        case 'pending': return '#F59E0B';
        case 'cancelled': return '#EF4444';
        default: return '#6B7280';
      }
    };

    return (
      <div className="card bg-gradient-to-br from-white to-blue-50 border-l-4 border-l-blue-500 shadow-xl" data-name="full-calendar-view" data-file="components/FullCalendarView.js">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-bold">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Appointment Calendar</h3>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigateDate('prev')}
                className="p-3 hover:bg-blue-100 rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                <ChevronLeft className="text-xl text-blue-600" />
              </button>

              <h4 className="text-xl font-bold text-blue-800 min-w-[250px] text-center bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-xl shadow-sm">
                {getCurrentPeriod()}
              </h4>

              <button
                onClick={() => navigateDate('next')}
                className="p-3 hover:bg-blue-100 rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                <ChevronRight className="text-xl text-blue-600" />
              </button>

              <button
                onClick={() => navigateDate('today')}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Today
              </button>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => changeView('timeGridDay')}
                className={`px-4 py-2 text-sm rounded-xl transition-all font-semibold shadow-sm ${
                  currentView === 'timeGridDay'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-blue-700 hover:bg-blue-50 border border-blue-200 hover:shadow-md'
                }`}
              >
                Day
              </button>
              <button
                onClick={() => changeView('timeGridWeek')}
                className={`px-4 py-2 text-sm rounded-xl transition-all font-semibold shadow-sm ${
                  currentView === 'timeGridWeek'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-green-700 hover:bg-green-50 border border-green-200 hover:shadow-md'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => changeView('dayGridMonth')}
                className={`px-4 py-2 text-sm rounded-xl transition-all font-semibold shadow-sm ${
                  currentView === 'dayGridMonth'
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-purple-700 hover:bg-purple-50 border border-purple-200 hover:shadow-md'
                }`}
              >
                Month
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-6 text-sm bg-white p-4 rounded-xl shadow-sm border border-blue-100">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-sm"></div>
            <span className="font-semibold text-blue-800">Confirmed</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-sm"></div>
            <span className="font-semibold text-green-800">Completed</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-sm"></div>
            <span className="font-semibold text-yellow-800">Pending</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 shadow-sm"></div>
            <span className="font-semibold text-red-800">Cancelled</span>
          </div>
        </div>

        <div style={{ height: '650px' }} className="bg-white rounded-xl shadow-inner border border-blue-100 overflow-hidden">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={currentView}
            headerToolbar={false}
            events={appointments}
            eventClick={handleEventClick}
            height="100%"
            slotMinTime="08:00:00"
            slotMaxTime="18:00:00"
            eventContent={(eventInfo) => {
              // For month view, show simplified content
              if (currentView === 'dayGridMonth') {
                return (
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-sm">
                    <div className="font-bold text-xs truncate">{eventInfo.event.title}</div>
                    <div className="text-xs opacity-90 mt-1">
                      {eventInfo.event.start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                );
              }
              // For day/week views, show detailed content
              return (
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg border-l-4 border-white">
                  <div className="font-bold text-sm truncate mb-1">{eventInfo.event.title}</div>
                  <div className="text-xs opacity-90 flex items-center space-x-2">
                    <span>🕒</span>
                    <span>
                      {eventInfo.event.start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} -
                      {eventInfo.event.end.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              );
            }}
            dayHeaderClassNames="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 font-bold border-b-2 border-blue-200"
            dayCellClassNames="hover:bg-blue-50 transition-colors"
            slotLaneClassNames="border-blue-100"
            timeSlotClassNames="border-blue-50"
            nowIndicatorClassNames="bg-red-500"
            businessHours={{
              daysOfWeek: [1, 2, 3, 4, 5],
              startTime: '09:00',
              endTime: '17:00',
              className: 'bg-green-50'
            }}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error('FullCalendarView component error:', error);
    return null;
  }
}

export default FullCalendarView;