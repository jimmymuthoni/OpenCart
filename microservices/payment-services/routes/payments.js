const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

// @route   POST /api/payments
// @desc    Create a new payment
// @access  Public (for now)

const axios = require('axios'); // Make sure this is at the top

const simulateProcessing = async (paymentId) => {
  setTimeout(async () => {
    try {
      const payment = await Payment.findById(paymentId);
      if (!payment) return;

      // Random status
      const status = Math.random() < 0.8 ? 'success' : 'failed';
      payment.status = status;
      payment.transactionId = `txn_${Date.now()}`;
      await payment.save();

      console.log(`Payment ${paymentId} processed with status: ${status}`);

      // 👉 Notify order service (dummy URL for now)
   //   await axios.post('http://localhost:5001/api/orders/update-payment-status', {
     //   orderId: payment.orderId,
       // status: payment.status,
        //transactionId: payment.transactionId
    //  });

      await axios.put(`http://localhost:5001/api/orders/${payment.orderId}/status`, {
        status: payment.status
      });

    } catch (error) {
      console.error(`Error processing payment ${paymentId}:`, error.message);
    }
  }, 3000); // 3 seconds
};


router.post('/', async (req, res) => {
  try {
    const { orderId, amount, currency, paymentMethod } = req.body;

    // Simple validation:
    if (!orderId || !amount || !paymentMethod) {
      return res.status(400).json({ error: 'orderId, amount, and paymentMethod are required' });
    }

    const payment = new Payment({
      orderId,
      amount,
      currency: currency || 'KES',
      paymentMethod,
    });

    await payment.save();
    simulateProcessing(payment._id); // Simulate payment processing
    res.status(201).json(payment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   GET /api/payments/:id
// @desc    Get payment by ID
// @access  Public (for now)
router.get('/:id', async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json(payment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   GET /api/payments/order/:orderId
// @desc    Get payments by Order ID
// @access  Public (for now)
router.get('/order/:orderId', async (req, res) => {
  try {
    const payments = await Payment.find({ orderId: req.params.orderId });
    if (!payments || payments.length === 0) {
      return res.status(404).json({ error: 'No payments found for that order' });
    }
    res.json(payments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
