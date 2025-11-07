function Calendar({ onAppointmentClick }) {
  try {
    const calendarRef = React.useRef(null);
    const [appointments] = React.useState([
      { 
        id: '1', 
        patient: 'Sarah Moyo', 
        start: '2025-11-07T09:00:00',
        end: '2025-11-07T09:30:00',
        status: 'confirmed',
        type: 'General Checkup'
      },
      { 
        id: '2', 
        patient: 'Michael Kondo', 
        start: '2025-11-07T10:30:00',
        end: '2025-11-07T11:00:00',
        status: 'confirmed',
        type: 'Follow-up'
      },
      { 
        id: '3', 
        patient: 'Emma Kudya', 
        start: '2025-11-07T14:00:00',
        end: '2025-11-07T14:30:00',
        status: 'confirmed',
        type: 'Consultation'
      },
      { 
        id: '4', 
        patient: 'James Gondo', 
        start: '2025-11-08T09:00:00',
        end: '2025-11-08T09:30:00',
        status: 'confirmed',
        type: 'Checkup'
      },
      { 
        id: '5', 
        patient: 'Lisa Sibanda', 
        start: '2025-11-06T11:00:00',
        end: '2025-11-06T11:30:00',
        status: 'completed',
        type: 'Follow-up'
      }
    ]);

    React.useEffect(() => {
      const calendarEl = calendarRef.current;
      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        slotMinTime: '08:00:00',
        slotMaxTime: '18:00:00',
        allDaySlot: false,
        events: appointments.map(apt => ({
          id: apt.id,
          title: `${apt.patient} - ${apt.type}`,
          start: apt.start,
          end: apt.end,
          backgroundColor: apt.status === 'confirmed' ? '#4A90E2' : apt.status === 'completed' ? '#52C41A' : '#FF6B6B',
          borderColor: 'transparent'
        })),
        eventClick: (info) => {
          const appointment = appointments.find(a => a.id === info.event.id);
          if (appointment) onAppointmentClick(appointment);
        },
        height: 'auto'
      });
      calendar.render();
    }, [appointments]);

    return (
      <div className="card" data-name="calendar" data-file="components/Calendar.js">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-[var(--text-dark)]">Your Appointments</h3>
            <p className="text-sm text-[var(--text-muted)] mt-1">Click any appointment to start consultation</p>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[var(--primary-color)]"></div>
              <span className="text-xs text-[var(--text-muted)]">Confirmed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[var(--secondary-color)]"></div>
              <span className="text-xs text-[var(--text-muted)]">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-color)]"></div>
              <span className="text-xs text-[var(--text-muted)]">Cancelled</span>
            </div>
          </div>
        </div>
        <div ref={calendarRef}></div>
      </div>
    );
  } catch (error) {
    console.error('Calendar component error:', error);
    return null;
  }
}
