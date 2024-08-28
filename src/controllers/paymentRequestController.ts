import { Request, Response } from 'express';
import PaymentRequest from '../models/paymentRequest';
import paystackService from '../services/paystackService';
import flutterwaveService from '../services/flutterwaveService';
import palmpayService from '../services/palmpayService';
import baniService from '../services/baniService';
import momoService from '../services/momoService';

// Controller to handle payment requests
export const processPayment = async (req: Request, res: Response) => {
  const { email, amount, provider, payment_type, country, currency, phoneNumber, reference, walletAddress } = req.body as PaymentRequest;

  try {
    if (provider === 'Paystack') {
      // Delegate payment processing to Paystack service
      const response = await paystackService.processPayment(email, amount, payment_type);
      res.json({ status: 'success', data: response });
    } else if (provider === 'Flutterwave') {
      // Delegate payment processing to Flutterwave service
      const response = await flutterwaveService.initiateCheckout(email, amount, payment_type);
      res.json({ status: 'success', data: response });
    } else if (provider === 'Momo') {
      // Delegate payment processing to Momo service
      const response = await momoService.initiatePayment(amount, currency, phoneNumber);
      res.json({ status: 'success', data: response });
    } else if (provider === 'Bani' && payment_type === 'Mobile Money') {
      // Delegate payment processing to Bani service
      const response = await baniService.initiateMobileMoneyPayment(amount, currency, phoneNumber);
      res.json({ status: 'success', data: response });
    } else if (provider === 'Palmpay' && payment_type === 'QR') {
      // Delegate payment processing to Palmpay service
      const response = await palmpayService.initiateQRPayment(amount, reference);
      res.json({ status: 'success', data: response });
    } else if (provider === 'Bani' && payment_type === 'Cryptocurrency') {
      // Delegate payment processing to Bani service
      const response = await baniService.initiateCryptoPayment(amount, currency, walletAddress);
      res.json({ status: 'success', data: response });
    }
    // ... handle other payment providers
  } catch (error) {
    console.error('Payment failed:', error);
    res.status(400).json({ status: 'error', message: 'Payment failed' });
  }
};

