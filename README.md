# Mini Music Distribution Dashboard

A modern music distribution dashboard built with Next.js that allows artists and labels to manage their music catalog with an intuitive interface.

## 🚀 Features Completed

### ✅ Authentication System
- **Mock Authentication**: Simple login system with localStorage persistence
- **Route Protection**: Automatic redirection for authenticated/unauthenticated users
- **Session Management**: Persistent login state across browser sessions

### ✅ Dashboard Management
- **Track Listing**: View all uploaded tracks in a clean table format
- **Real-time Search**: Filter tracks by title, artist, or genre
- **Sorting**: Tracks automatically sorted by release date (newest first)
- **Responsive Design**: Mobile-friendly table layout

### ✅ Track Management
- **Track Upload**: Add new tracks with comprehensive metadata
- **Track Details**: Individual track view pages with full information
- **Genre Classification**: Support for multiple music genres (Pop, Hip-Hop, Rock, Electronic, Indie, Classical)
- **Status Tracking**: Track upload and release status

### ✅ User Interface
- **Modern Design**: Clean, professional interface with card-based layout
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Navigation**: Intuitive navigation between dashboard, upload, and track details

### ✅ API Integration
- **RESTful API**: Complete CRUD operations for track management
- **Data Persistence**: In-memory storage with UUID-based track identification
- **Error Handling**: Comprehensive error handling and user feedback

## 🛠 Technology Stack

- **Frontend**: Next.js 14.0.0 with React 18.2.0
- **Styling**: Custom CSS with CSS variables for theming
- **Routing**: Next.js file-based routing with dynamic routes
- **State Management**: React hooks (useState, useEffect)
- **API**: Next.js API routes
- **UUID Generation**: UUID v4 for unique track identification

## 📦 Setup Instructions

### Prerequisites
- Node.js 16.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd cloned-repo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🎯 Project Approach

### Architecture Decision
- **Next.js Pages Router**: Chosen for its simplicity and file-based routing system
- **Component-Based Design**: Modular components for reusability and maintainability
- **API-First Approach**: Separate API layer for potential future mobile app integration

### Design Philosophy
- **Minimalist UI**: Clean, distraction-free interface focusing on content
- **Mobile-First**: Responsive design ensuring usability across all devices
- **Accessibility**: Semantic HTML and proper contrast ratios for better accessibility

### Data Management
- **In-Memory Storage**: Simple solution for demo purposes with easy migration path to database
- **UUID-Based IDs**: Ensures unique identification and prevents ID conflicts
- **RESTful API Design**: Standard HTTP methods for predictable API behavior

### User Experience
- **Mock Authentication**: Simplified login for demo purposes (any non-empty credentials work)
- **Instant Feedback**: Loading states and error messages for better user experience
- **Progressive Enhancement**: Core functionality works without JavaScript

## 📁 Project Structure

```
mini-music-dashboard/
├── components/
│   └── Layout.js              # Main layout component with navigation
├── pages/
│   ├── api/
│   │   ├── hello.js          # Default Next.js API route
│   │   └── tracks.js         # Track management API (GET, POST)
│   ├── track/
│   │   └── [id].js           # Dynamic track detail page
│   ├── _app.js               # Next.js app wrapper with theme management
│   ├── _document.js          # Custom document for theme persistence
│   ├── dashboard.js          # Main dashboard with track listing
│   ├── index.js              # Login page
│   └── upload.js             # Track upload form
├── public/                   # Static assets
├── styles/
│   ├── globals.css           # Global styles with theme variables
│   └── Home.module.css       # Component-specific styles
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🔧 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build production application
- `npm start` - Start production server on port 3000
- `npm run lint` - Run ESLint for code quality

## 🎨 Theme System

The application includes a sophisticated theme system:
- **CSS Variables**: Dynamic color switching without page reload
- **Local Storage**: Theme preference persistence
- **System Preference**: Respects user's OS theme preference
- **Manual Toggle**: Easy switching between light and dark modes

## 🔐 Authentication Flow

1. **Login**: Enter any non-empty username and password
2. **Session Storage**: User data stored in localStorage
3. **Route Protection**: Automatic redirection based on authentication state
4. **Logout**: Clear session and redirect to login



## 🚀 Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- Real file upload functionality
- User registration and proper authentication
- Analytics and reporting features
- Batch operations for track management
- Advanced search and filtering options

## 📝 License

This project is created for demonstration purposes.

---

**Note**: This is a mock application created for assignment purposes. The authentication system accepts any non-empty credentials for demonstration.
