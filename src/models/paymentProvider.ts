import mongoose, { Document, Schema } from 'mongoose';

// Interface definition
interface PaymentProvider {
  name: string;
  types: string[];
  logo: string;
}

// MongoDB schema
const paymentProviderSchema = new Schema<PaymentProvider>({
  name: { type: String, required: true },
  types: { type: [String], required: true },
  logo: { type: String, required: true },
}, { timestamps: true });

// MongoDB model
export const PaymentProviderModel = mongoose.model<PaymentProvider & Document>('PaymentProvider', paymentProviderSchema);

export default PaymentProvider;