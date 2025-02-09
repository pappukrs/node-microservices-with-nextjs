const express = require('express');
const cors = require('cors');
const rateLimiter = require('./utils/rateLimiter');
const gatewayRoutes = require('./routes/gatewayRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rate Limiting Middleware
app.use(rateLimiter);

// Routes
app.use('/api', gatewayRoutes);

app.listen(PORT, () => {
  console.log(`🚀 API Gateway is running on http://localhost:${PORT}`);
});
