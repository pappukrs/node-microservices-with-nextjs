import { Context } from 'koa';
import { createPayment, getPayments, getPaymentById, updatePaymentStatus } from '../services/payment.service';

export const createPaymentHandler = async (ctx: Context) => {
  try {
    const payment = await createPayment(ctx.request.body);
    ctx.status = 201;
    ctx.body = payment;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Failed to create payment' };
  }
};

export const getPaymentsHandler = async (ctx: Context) => {
  try {
    const payments = await getPayments();
    ctx.body = payments;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Failed to fetch payments' };
  }
};

export const getPaymentByIdHandler = async (ctx: Context) => {
  try {
    const payment = await getPaymentById(ctx.params.id);
    if (!payment) {
      ctx.status = 404;
      ctx.body = { message: 'Payment not found' };
    } else {
      ctx.body = payment;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Failed to fetch payment' };
  }
};

export const updatePaymentStatusHandler = async (ctx: Context) => {
  try {
    const payment = await updatePaymentStatus(ctx.params.id, ctx.request.body.status);
    if (!payment) {
      ctx.status = 404;
      ctx.body = { message: 'Payment not found' };
    } else {
      ctx.body = payment;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Failed to update payment status' };
  }
};
