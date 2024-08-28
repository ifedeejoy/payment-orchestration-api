class BaniService {
  private readonly baseUrl = 'https://api.bani.africa/v1'; // Replace with actual API URL
  private readonly apiKey: string;

  constructor() {
    this.apiKey = process.env.BANI_API_KEY!;
  }

  async initiateMobileMoneyPayment(amount: number, currency: string, phoneNumber: string) {
    const payload = {
      amount,
      currency,
      phoneNumber,
      // Add other required fields
    };

    return this.makeRequest('/mobile-money/initiate', payload);
  }

  async initiateCryptoPayment(amount: number, currency: string, walletAddress: string) {
    const payload = {
      amount,
      currency,
      walletAddress,
      // Add other required fields
    };

    return this.makeRequest('/crypto/initiate', payload);
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
      throw new Error('Failed to process Bani request');
    }

    return response.json();
  }
}

export default new BaniService();