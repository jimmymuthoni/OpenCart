const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/orders', orderRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected for Order Service');
  app.listen(process.env.PORT || 5001, () => {
    console.log(`Order Service running on port ${process.env.PORT || 5001}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
