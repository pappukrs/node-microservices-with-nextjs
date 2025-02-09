import Payment from '../models/payment.model';

export const createPayment = async (paymentData: any) => {
  const payment = new Payment(paymentData);
  return payment.save();
};

export const getPayments = async () => {
  return Payment.find();
};

export const getPaymentById = async (id: string) => {
  return Payment.findById(id);
};

export const updatePaymentStatus = async (id: string, status: string) => {
  return Payment.findByIdAndUpdate(id, { status }, { new: true });
};
