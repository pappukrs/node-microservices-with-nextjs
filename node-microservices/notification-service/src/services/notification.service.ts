import Notification from '../models/notification.model';

export const createNotification = async (data: any) => {
  const notification = new Notification(data);
  return notification.save();
};

export const getNotifications = async () => {
  return Notification.find();
};

export const getNotificationById = async (id: string) => {
  return Notification.findById(id);
};

export const updateNotificationStatus = async (id: string, status: string) => {
  return Notification.findByIdAndUpdate(id, { status }, { new: true });
};
