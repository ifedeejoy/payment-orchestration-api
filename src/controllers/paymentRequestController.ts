import { Request, Response } from 'express';
import PaymentRequest from '../models/paymentRequest';
import paystackService from '../services/paystackService';
import flutterwaveService from '../services/flutterwaveService';

// Controller to handle payment requests
export const processPayment = async (req: Request, res: Response) => {
  const { email, amount, provider, payment_type } = req.body as PaymentRequest;

  try {
    if (provider === 'Paystack') {
      // Delegate payment processing to Paystack service
      const response = await paystackService.processPayment(email, amount, payment_type);
      res.json({ status: 'success', data: response });
    } else if (provider === 'Flutterwave') {
      // Delegate payment processing to Flutterwave service
      const response = await flutterwaveService.initiateCheckout(email, amount, payment_type);
      res.json({ status: 'success', data: response });
    }
    // ... handle other payment providers
  } catch (error) {
    console.error('Payment failed:', error);
    res.status(400).json({ status: 'error', message: 'Payment failed' });
  }
};

