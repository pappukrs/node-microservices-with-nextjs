import Router from 'koa-router';
import {
  createPaymentHandler,
  getPaymentsHandler,
  getPaymentByIdHandler,
  updatePaymentStatusHandler
} from '../controllers/payment.controller';

const router = new Router();

router.post('/', createPaymentHandler);
router.get('/', getPaymentsHandler);
router.get('/:id', getPaymentByIdHandler);
router.patch('/:id/status', updatePaymentStatusHandler);

export default router;
