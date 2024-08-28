class PaystackService {
  private readonly baseUrl = 'https://api.paystack.co';
  private readonly secretKey: string;

  constructor() {
    this.secretKey = process.env.PAYSTACK_SECRET_KEY!;
  }

  async processPayment(email: string, amount: number, payment_type: string) {
    const channels = this.getChannels(payment_type);

    const response = await fetch(`${this.baseUrl}/transaction/initialize`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Paystack expects amount in kobo
        channels: [channels],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to initialize transaction');
    }

    const data = await response.json();
    return data.data;
  }

  private getChannels(payment_type: string): string {
    switch (payment_type) {
      case 'Card':
        return 'card';
      case 'Bank Transfer':
        return 'bank_transfer';
      case 'USSD':
        return 'ussd';
      default:
        throw new Error('Invalid payment type');
    }
  }
}

export default new PaystackService();