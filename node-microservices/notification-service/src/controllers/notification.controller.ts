import { Request, ResponseToolkit } from '@hapi/hapi';
import { createNotification, getNotifications, getNotificationById, updateNotificationStatus } from '../services/notification.service';

export const createNotificationHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const notification = await createNotification(request.payload);
    return h.response(notification).code(201);
  } catch (error) {
    return h.response({ error: 'Failed to create notification' }).code(500);
  }
};

export const getNotificationsHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const notifications = await getNotifications();
    return h.response(notifications);
  } catch (error) {
    return h.response({ error: 'Failed to fetch notifications' }).code(500);
  }
};

export const getNotificationByIdHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const notification = await getNotificationById(request.params.id);
    if (!notification) {
      return h.response({ message: 'Notification not found' }).code(404);
    }
    return h.response(notification);
  } catch (error) {
    return h.response({ error: 'Failed to fetch notification' }).code(500);
  }
};

export const updateNotificationStatusHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const notification = await updateNotificationStatus(request.params.id, request.payload.status);
    if (!notification) {
      return h.response({ message: 'Notification not found' }).code(404);
    }
    return h.response(notification);
  } catch (error) {
    return h.response({ error: 'Failed to update notification status' }).code(500);
  }
};
