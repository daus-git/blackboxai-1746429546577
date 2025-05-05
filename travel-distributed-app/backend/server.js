const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const tripsRouter = require('./routes/trips');
const bookingsRouter = require('./routes/bookings');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/trips', tripsRouter);
app.use('/api/bookings', bookingsRouter);

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
