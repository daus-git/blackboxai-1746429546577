# Distributed Travel Application

A distributed travel booking system with separate frontend and backend services.

## Project Structure

```
travel-distributed-app/
├── backend/           # Node.js/Express backend service
│   ├── controllers/  # Route controllers
│   ├── routes/      # API routes
│   ├── package.json # Backend dependencies
│   └── server.js    # Main server file
└── frontend/         # HTML/JS frontend
    ├── index.html   # Main HTML file
    └── js/          # JavaScript files
        ├── api.js   # API integration
        └── main.js  # Main application logic
```

## Features

- Browse available trips
- Search trips by destination
- View trip details
- Book trips
- Manage bookings
- Responsive design with Tailwind CSS

## Setup and Running

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

The backend will run on http://localhost:3000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Start a local server (using Python's built-in HTTP server):
   ```bash
   python3 -m http.server 8000
   ```

The frontend will be available at http://localhost:8000

## API Endpoints

### Trips
- GET /api/trips - Get all trips
- GET /api/trips/:id - Get trip by ID
- GET /api/trips/search/:destination - Search trips by destination

### Bookings
- GET /api/bookings - Get all bookings
- GET /api/bookings/:id - Get booking by ID
- POST /api/bookings - Create new booking
- PATCH /api/bookings/:id/status - Update booking status

## Technologies Used

- Backend:
  - Node.js
  - Express.js
  - CORS for cross-origin requests

- Frontend:
  - HTML5
  - Tailwind CSS for styling
  - JavaScript (ES6+)
  - Google Fonts
  - Font Awesome icons

## Distributed System Architecture

This application follows a distributed architecture where:
- Frontend and backend run as separate services
- Communication happens via REST API
- Services can be scaled independently
- Cross-Origin Resource Sharing (CORS) enabled for security
