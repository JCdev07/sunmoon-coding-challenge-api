const express = require('express');
const morgan = require('morgan');

// Initialize express server
const app = express();

// Development logging middleware
app.use(morgan('dev'));

// Route files
const logs = require('./routes/logs');

// Mounting routes to URL path
app.use('/api/logs', logs);

// Declaring port
const PORT = 5000;

// Listen to server
app.listen(PORT, () => {
   console.log(`Server running in port ${PORT}`);
});
