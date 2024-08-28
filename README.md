# Famasi Payment Orchestration Layer

## Overview

Famasi is a platform that connects pharmacies to individuals and businesses in need of medications. This repository contains the payment orchestration layer for Famasi, designed to provide a seamless and flexible payment experience for patients, pharmacies, and healthcare providers.

## Features

- Multi-channel payment support: Card, cash, transfer, USSD, QR, auto-debit & wallet
- Pharmacy payment acceptance and reconciliation
- Provider payment management (prepaid, postpaid, pay-as-you-go)
- Integration with multiple payment partners
- Checkout component for consistent user experience
- Country-specific payment options

## Payment Partners

- Paystack: Transfer, Card, USSD, QR
- Flutterwave: International cards, backup for Paystack
- Palmpay: QR, Virtual accounts
- Bani: Mobile money (Ghana, Cameroon, Kenya, Uganda, Rwanda, Mali, Tanzania, Senegal), Cryptocurrency
- MoMo: MTN mobile money

## Checkout Flows

### Patients
- Invoice generation for all orders
- Direct checkout for website orders with pricing
- Country-specific payment options
- Backup payment partner option
- QR code scanning for in-store payments
- "Pay for me" link generation

### Pharmacies
- Automatic wallet assignment
- 1% transaction fee (except for cash payments)
- 5% commission on Request fulfillments
- Support for dedicated and non-dedicated payment hardware
- Multiple virtual accounts for KYB-verified pharmacies

### Providers
- Wallet and virtual account assignment
- Prepaid, Pay-as-you-go, and postpaid payment options
- Automated invoicing and payment processing

## Technical Stack

- Frontend: React (Web), React Native (Mobile)
- Backend: Node.js with Express
- Database: PostgreSQL
- Payment Integrations: REST APIs

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/ifedeejoy/payment-orchestration-api.git
   ```

2. Install dependencies:
   ```
   cd famasi-payment-orchestration
   npm install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env
   ```
   Edit the `.env` file with your API keys and other configuration details.

4. Run the development server:
   ```
   npm run dev
   ```
