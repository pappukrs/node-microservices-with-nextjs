import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  type: { type: String, required: true },  // e.g., 'email', 'sms', 'push'
  recipient: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['pending', 'sent', 'failed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const Notification = mongoose.model('Notification', notificationSchema);
export default Notification;
