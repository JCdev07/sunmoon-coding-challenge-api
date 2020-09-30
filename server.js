const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Initialize express server
const app = express();

// Load env file
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Development logging middleware
app.use(morgan('dev'));

// Middleware
app.use(express.json());
app.use(cors());

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
