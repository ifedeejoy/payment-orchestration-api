class PalmpayService {
  private readonly baseUrl = 'https://api.palmpay.com/v1'; // Replace with actual API URL
  private readonly apiKey: string;

  constructor() {
    this.apiKey = process.env.PALMPAY_API_KEY!;
  }

  async initiateQRPayment(amount: number, reference: string) {
    const payload = {
      amount,
      reference,
      // Add other required fields
    };

    return this.makeRequest('/qr-payments', payload);
  }

  async createVirtualAccount(userId: string, accountName: string) {
    const payload = {
      userId,
      accountName,
      // Add other required fields
    };

    return this.makeRequest('/virtual-accounts', payload);
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
      throw new Error('Failed to process Palmpay request');
    }

    return response.json();
  }
}

export default new PalmpayService();