class FlutterwaveService {
  private readonly baseUrl = 'https://api.flutterwave.com/v3';
  private readonly secretKey: string;
  private readonly publicKey: string;

  constructor() {
    this.secretKey = process.env.FLUTTERWAVE_SECRET_KEY!;
    this.publicKey = process.env.FLUTTERWAVE_PUBLIC_KEY!;
  }

  async initiateCheckout(email: string, amount: number, payment_type: string) {
    const payload = {
      tx_ref: `MC-${Date.now()}`,
      amount: amount,
      currency: "NGN",
      redirect_url: "https://your-redirect-url.com/callback",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a"
      },
      customer: {
        email: email,
        phonenumber: "080****4528",
        name: "Yemi Desola"
      },
      customizations: {
        title: "Your Payment Title",
        logo: "https://your-logo-url.com/logo.png"
      }
    };

    const response = await this.makeRequest('/payments', payload);
    return response.data.link; // Return the checkout URL
  }

  private async makeRequest(endpoint: string, payload: any) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to initiate checkout');
    }

    return response.json();
  }
}

export default new FlutterwaveService();