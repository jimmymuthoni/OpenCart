const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.post('/api/orders/update-payment-status', (req, res) => {
  console.log('✅ Order Service received payment update:', req.body);

  // Simulate successful order update
  res.status(200).json({ message: 'Order status updated successfully in Order Service.' });
});

app.listen(PORT, () => {
  console.log(`🟢 Mock Order Service running on port ${PORT}`);
});
