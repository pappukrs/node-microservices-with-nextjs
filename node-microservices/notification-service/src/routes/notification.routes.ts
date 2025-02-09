import { ServerRoute } from '@hapi/hapi';
import {
  createNotificationHandler,
  getNotificationsHandler,
  getNotificationByIdHandler,
  updateNotificationStatusHandler
} from '../controllers/notification.controller';

const routes: ServerRoute[] = [
  { method: 'POST', path: '/notifications', handler: createNotificationHandler },
  { method: 'GET', path: '/notifications', handler: getNotificationsHandler },
  { method: 'GET', path: '/notifications/{id}', handler: getNotificationByIdHandler },
  { method: 'PATCH', path: '/notifications/{id}/status', handler: updateNotificationStatusHandler }
];

export default routes;
