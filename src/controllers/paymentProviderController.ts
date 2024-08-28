import { Request, Response } from 'express';
import PaymentProvider from '../models/paymentProvider';

const paymentProviders: PaymentProvider[] = [
  {
    name: 'Paystack',
    types: ['Card', 'Bank Transfer', 'USSD'],
    logo: '/path/to/paystack-logo.png',
  },
  {
    name: 'Flutterwave',
    types: ['Card', 'Bank Transfer', 'USSD'],
    logo: '/path/to/flutterwave-logo.png',
  },
  // ... other providers
];

// Controller to get the list of payment providers
export const getPaymentProviders = (req: Request, res: Response) => {
  res.json(paymentProviders);
};
