import { FastifyReply, FastifyRequest } from 'fastify';
import { createOrder, getOrders, getOrderById, updateOrderStatus } from '../services/order.service';

export const createOrderHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const order = await createOrder(request.body);
    return reply.code(201).send(order);
  } catch (error) {
    return reply.code(500).send(error);
  }
};

export const getOrdersHandler = async (_request: FastifyRequest, reply: FastifyReply) => {
  try {
    const orders = await getOrders();
    return reply.send(orders);
  } catch (error) {
    return reply.code(500).send(error);
  }
};

export const getOrderByIdHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const order = await getOrderById(request.params.id);
    if (!order) return reply.code(404).send({ message: 'Order not found' });
    return reply.send(order);
  } catch (error) {
    return reply.code(500).send(error);
  }
};

export const updateOrderStatusHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const order = await updateOrderStatus(request.params.id, request.body.status);
    if (!order) return reply.code(404).send({ message: 'Order not found' });
    return reply.send(order);
  } catch (error) {
    return reply.code(500).send(error);
  }
};
