import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import paymentRoutes from './routes/payment.routes';

dotenv.config();

const app = new Koa();
app.use(bodyParser());
app.use(paymentRoutes.routes()).use(paymentRoutes.allowedMethods());

const PORT = process.env.PORT || 5001;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/payment-service');
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Payment Service running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start Payment Service:', error);
  }
};

start();
