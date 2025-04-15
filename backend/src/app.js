require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const messageRoutes = require('./routes/messages');
const dbConfig = require('./config/db');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for frontend origin
app.use(cors({ origin: 'http://localhost:3000' }));

// Database connection
dbConfig();

// Routes
app.use('/api/messages', messageRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});