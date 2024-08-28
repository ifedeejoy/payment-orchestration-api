import mongoose, { Document, Schema } from 'mongoose';

// Interface definition
export interface PaymentRequest {
  email: string;
  amount: number;
  provider: string;
  payment_type: string;
  // Add other relevant fields
}

// MongoDB schema
const paymentRequestSchema = new Schema<PaymentRequest>({
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  provider: { type: String, required: true },
  payment_type: { type: String, required: true },
  // Add other relevant fields
}, { timestamps: true });

// MongoDB model
export const PaymentRequestModel = mongoose.model<PaymentRequest & Document>('PaymentRequest', paymentRequestSchema);

export default PaymentRequest;