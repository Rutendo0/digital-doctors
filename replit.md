# Parirenyatwa Hospital - Doctor Portal

## Project Overview
A comprehensive doctor portal for Parirenyatwa Hospital built with Next.js. The application provides healthcare professionals with tools for managing appointments, patient records, consultations, and more. The portal features a modern Arcus-themed design with gradient cards, clean navigation, and professional aesthetics.

## Recent Changes (November 10, 2025)

### Design System Overhaul - Arcus Theme
- **Complete UI Redesign**: Transformed the entire interface to match the Arcus design system
- **Color Palette**: Implemented Arcus color scheme with blues, purples, greens, and oranges
- **Gradient Cards**: Added beautiful gradient backgrounds for metric cards (blue, green, blue-purple, purple)
- **Modern Components**: Redesigned Dashboard, Sidebar, and Header with Arcus styling
- **Design Tokens**: Created comprehensive Tailwind configuration with Arcus colors and utilities
- **Visual Consistency**: All components now follow the same modern, professional aesthetic

### Migration & Configuration
- **Migrated from Vercel to Replit**: Successfully configured the project to run in the Replit environment
- **Port Configuration**: Updated development and production scripts to bind to 0.0.0.0:5000 for proper Replit compatibility
- **Workflow Setup**: Configured `dev-server` workflow for automatic server management
- **Deployment Configuration**: Set up autoscale deployment with Next.js build and start commands
- **Environment Files**: Enhanced .gitignore with comprehensive Next.js and Node.js exclusions

## Design System

### Arcus Color Palette
- **Primary Blues**: #3B82F6 to #1E3A8A (used for navigation, primary actions)
- **Secondary Purples**: #A855F7 to #581C87 (used for secondary metrics)
- **Accent Green**: #22C55E to #14532D (used for positive metrics)
- **Accent Orange**: #F97316 to #7C2D12 (used for pending/warning states)
- **Accent Red**: #EF4444 to #7F1D1D (used for alerts/cancellations)

### Gradient Backgrounds
- **Blue Gradient**: Linear gradient from #60A5FA to #3B82F6
- **Purple Gradient**: Linear gradient from #C084FC to #9333EA
- **Green Gradient**: Linear gradient from #4ADE80 to #22C55E
- **Blue-Purple Gradient**: Linear gradient from #60A5FA to #A855F7
- **Sky Gradient**: Multi-color gradient with blue and purple tones

### Design Components
- **Metric Cards**: Gradient backgrounds with frosted glass icons, large numbers, and subtle overlays
- **Sidebar Navigation**: Clean icons with active state gradients
- **Header**: Search bar, notifications, and user profile dropdown
- **Buttons**: Primary (gradient blue) and secondary (white with border) styles
- **Status Badges**: Pill-shaped badges with color-coded backgrounds

## Project Architecture

### Tech Stack
- **Framework**: Next.js 14 (Pages Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS with custom Arcus configuration
- **Calendar**: FullCalendar (with React integration)
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **Language**: JavaScript (with TypeScript type definitions)

### Directory Structure
```
/
├── components/          # React components
│   ├── Dashboard.js    # Main dashboard with gradient metric cards
│   ├── Appointments.js # Appointment management
│   ├── Calendar.js     # Calendar interface
│   ├── Patients.js     # Patient list and management
│   ├── Analytics.js    # Analytics dashboard
│   ├── Sidebar.js      # Navigation sidebar with Arcus styling
│   ├── Header.js       # Top header with search and notifications
│   └── ...             # Other feature components
├── pages/              # Next.js pages (Pages Router)
│   ├── _app.js        # App wrapper
│   └── index.js       # Home/landing page
├── styles/            # Global styles
│   └── globals.css    # Tailwind CSS with Arcus design tokens
└── utils/             # Utility functions
    └── medicationDatabase.js # Medication data
```

### Key Features
- Patient appointment scheduling and management
- Interactive calendar with multiple views (day/week/month)
- Patient history and medical records
- SOAP notes (Subjective, Objective, Assessment, Plan)
- E-Prescription system
- Analytics and reporting with charts
- Consultation room for virtual appointments
- Doctor availability management
- Real-time notifications
- User profile management

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

Ready to publish! Click the Publish button when you want to deploy to production.

## Known Warnings
- Cross-origin request warnings from Next.js are informational only and don't affect functionality
- FullCalendar shows warning about unknown 'timeSlotClassNames' option (non-critical)

## User Preferences
- **Design System**: Arcus theme with modern gradients and professional aesthetics
- **Branding**: ARCUS logo and Hospital Portal subtitle in sidebar

## Security Notes
- Environment variables should be managed through Replit's secrets system
- No API keys or secrets should be committed to the repository
- The application follows client/server separation best practices
- All gradient overlays use opacity and pointer-events: none for proper layering
