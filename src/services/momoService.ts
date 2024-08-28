class MomoService {
  private readonly baseUrl = 'https://api.mtn.com/v1'; // Replace with actual API URL
  private readonly apiKey: string;

  constructor() {
    this.apiKey = process.env.MOMO_API_KEY!;
  }

  async initiatePayment(amount: number, currency: string, phoneNumber: string) {
    const payload = {
      amount,
      currency,
      phoneNumber,
      // Add other required fields
    };

    return this.makeRequest('/collections', payload);
  }

  private async makeRequest(endpoint: string, payload: any) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to process MoMo request');
    }

    return response.json();
  }
}

export default new MomoService();