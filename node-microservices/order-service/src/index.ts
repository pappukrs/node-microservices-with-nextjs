import Fastify from 'fastify';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import orderRoutes from './routes/order.routes';

dotenv.config();

const server = Fastify({ logger: true });

server.register(orderRoutes, { prefix: '/api/orders' });

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/order-service');
    server.log.info('Connected to MongoDB');

    await server.listen({ port: parseInt(process.env.PORT || '5000'), host: '0.0.0.0' });
    server.log.info(`Order Service running on port ${process.env.PORT || 5000}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
