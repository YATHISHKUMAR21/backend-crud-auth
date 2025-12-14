const mongoose = require('mongoose');

require('dotenv').config();

const dbURI = process.env.MONGODB_URI ; // Replace with your MongoDB URI


function connectDB() {
  console.log('Connecting to MongoDB URI:', dbURI);
  mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = connectDB;