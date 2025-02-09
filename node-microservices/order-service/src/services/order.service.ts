import Order from '../models/order.model';

export const createOrder = async (orderData: any) => {
  const order = new Order(orderData);
  return order.save();
};

export const getOrders = async () => {
  return Order.find();
};

export const getOrderById = async (id: string) => {
  return Order.findById(id);
};

export const updateOrderStatus = async (id: string, status: string) => {
  return Order.findByIdAndUpdate(id, { status }, { new: true });
};
