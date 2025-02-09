import { FastifyInstance } from 'fastify';
import { createOrderHandler, getOrdersHandler, getOrderByIdHandler, updateOrderStatusHandler } from '../controllers/order.controller';

const orderRoutes = async (server: FastifyInstance) => {
  server.post('/', createOrderHandler);
  server.get('/', getOrdersHandler);
  server.get('/:id', getOrderByIdHandler);
  server.patch('/:id/status', updateOrderStatusHandler);
};

export default orderRoutes;
