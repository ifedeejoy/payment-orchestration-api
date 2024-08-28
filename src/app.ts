import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import paymentProviderRoutes from './routes/paymentProviderRoutes';
import paymentRequestRoutes from './routes/paymentRequestRoutes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mount the routes
app.use('/api/payment-providers', paymentProviderRoutes);
app.use('/api/payment-request', paymentRequestRoutes);

const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});