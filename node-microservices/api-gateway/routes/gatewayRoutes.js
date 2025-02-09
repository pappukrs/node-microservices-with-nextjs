const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { expressjwt: jwt } = require('express-jwt');
const { getCache, setCache } = require('../utils/cache');

const router = express.Router();

const services = {
  auth: 'http://localhost:3001',
  product: 'http://localhost:3002',
  order: 'http://localhost:3003',
  payment: 'http://localhost:3004',
  notification: 'http://localhost:3005'
};

// JWT Authentication Middleware
const authMiddleware = jwt({
  secret: 'your-secret-key', // Replace with your actual secret key
  algorithms: ['HS256']
}).unless({ path: ['/api/auth/login', '/api/auth/register'] });

// Apply JWT Middleware
router.use(authMiddleware);

// Caching Middleware
router.use((req, res, next) => {
  const key = req.originalUrl;
  const cachedResponse = getCache(key);

  if (cachedResponse) {
    return res.status(200).json(cachedResponse);
  }
  res.sendResponse = res.json;
  res.json = (body) => {
    setCache(key, body);
    res.sendResponse(body);
  };
  next();
});

// Service Proxies
router.use('/auth', createProxyMiddleware({ target: services.auth, changeOrigin: true }));
router.use('/product', createProxyMiddleware({ target: services.product, changeOrigin: true }));
router.use('/order', createProxyMiddleware({ target: services.order, changeOrigin: true }));
router.use('/payment', createProxyMiddleware({ target: services.payment, changeOrigin: true }));
router.use('/notification', createProxyMiddleware({ target: services.notification, changeOrigin: true }));

module.exports = router;
