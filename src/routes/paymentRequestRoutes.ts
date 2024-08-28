import express from 'express';
import { processPayment } from '../controllers/paymentRequestController';

const router = express.Router();

// Route to handle payment requests
router.post('/', processPayment);

export default router;