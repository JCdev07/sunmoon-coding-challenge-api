const express = require('express');
const morgan = require('morgan');

// Initialize express server
const app = express();

// Development logging middleware
app.use(morgan('dev'));

// Declaring port
const PORT = 5000;

// Listen to server
app.listen(PORT, () => {
   console.log(`Server running in port ${PORT}`);
});
