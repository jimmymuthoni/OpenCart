const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const paymentsRouter = require('./routes/payments');

dotenv.config();
connectDB(); // connect to MongoDB

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Payment Service is running!');
});

app.use('/api/payments', paymentsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
