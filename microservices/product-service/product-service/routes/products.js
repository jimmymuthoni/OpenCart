const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, data: products });
  } catch (err) {
    console.error('Error fetching products:', err); // Add this line to log the error
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;

