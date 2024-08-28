import express from 'express';
import { getPaymentProviders } from '../controllers/paymentProviderController';

const router = express.Router();

// Route to get the list of payment providers
router.get('/', getPaymentProviders);

export default router;
