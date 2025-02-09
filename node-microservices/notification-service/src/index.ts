import Hapi from '@hapi/hapi';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import notificationRoutes from './routes/notification.routes';

dotenv.config();

const server: Hapi.Server = Hapi.server({
  port: process.env.PORT || 5002,
  host: '0.0.0.0'
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/notification-service');
    console.log('Connected to MongoDB');

    server.route(notificationRoutes);

    await server.start();
    console.log(`Notification Service running at: ${server.info.uri}`);
  } catch (error) {
    console.error('Failed to start Notification Service:', error);
    process.exit(1);
  }
};

startServer();
