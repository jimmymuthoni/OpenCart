const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productsRoute = require('./routes/products');

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/products', productsRoute);

app.listen(PORT, () => {
  console.log(`Products microservice running on port ${PORT}`);
});
