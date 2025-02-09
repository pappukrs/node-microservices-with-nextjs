require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Auth Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
