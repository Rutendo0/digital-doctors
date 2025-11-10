# Parirenyatwa Hospital - Doctor Portal

## Project Overview
A comprehensive doctor portal for Parirenyatwa Hospital built with Next.js. The application provides healthcare professionals with tools for managing appointments, patient records, consultations, and more.

## Recent Changes (November 10, 2025)
- **Migrated from Vercel to Replit**: Successfully configured the project to run in the Replit environment
- **Port Configuration**: Updated development and production scripts to bind to 0.0.0.0:5000 for proper Replit compatibility
- **Workflow Setup**: Configured `dev-server` workflow for automatic server management
- **Deployment Configuration**: Set up autoscale deployment with Next.js build and start commands
- **Environment Files**: Enhanced .gitignore with comprehensive Next.js and Node.js exclusions

## Project Architecture

### Tech Stack
- **Framework**: Next.js 14 (Pages Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Calendar**: FullCalendar (with React integration)
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **Language**: JavaScript (with TypeScript type definitions)

### Directory Structure
```
/
├── components/          # React components
│   ├── Dashboard.js    # Main dashboard view
│   ├── Appointments.js # Appointment management
│   ├── Calendar.js     # Calendar interface
│   ├── Patients.js     # Patient list and management
│   ├── Analytics.js    # Analytics dashboard
│   └── ...             # Other feature components
├── pages/              # Next.js pages (Pages Router)
│   ├── _app.js        # App wrapper
│   └── index.js       # Home/landing page
├── styles/            # Global styles
│   └── globals.css    # Tailwind CSS imports
└── utils/             # Utility functions
    └── medicationDatabase.js # Medication data
```

### Key Features
- Patient appointment scheduling and management
- Interactive calendar with multiple views (day/week/month)
- Patient history and medical records
- SOAP notes (Subjective, Objective, Assessment, Plan)
- E-Prescription system
- Analytics and reporting
- Consultation room for virtual appointments
- Doctor availability management

## Development

### Running Locally
The project is configured to run automatically via the Replit workflow system. The development server runs on port 5000 and is accessible through the Replit webview.

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

### Port Configuration
- **Development**: Port 5000, bound to 0.0.0.0
- **Production**: Port 5000, bound to 0.0.0.0
- These settings ensure proper operation within Replit's environment

## Deployment
The project is configured for Replit's autoscale deployment:
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Type**: Autoscale (suitable for stateless web applications)

## Known Warnings
- Cross-origin request warnings from Next.js are informational only and don't affect functionality
- FullCalendar shows warning about unknown 'timeSlotClassNames' option (non-critical)

## User Preferences
(To be updated as preferences are expressed)

## Security Notes
- Environment variables should be managed through Replit's secrets system
- No API keys or secrets should be committed to the repository
- The application follows client/server separation best practices
