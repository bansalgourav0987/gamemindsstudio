import { PaymentMethod } from './types';

export const paymentMethods: PaymentMethod[] = [
  {
    name: 'Google Pay',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/2560px-Google_Pay_Logo_%282020%29.svg.png',
    description: 'Fast, simple way to pay online or in stores with Google',
    features: [
      'Secure contactless payments',
      'Quick checkout process',
      'Rewards and offers',
      'Transaction history'
    ]
  },
  {
    name: 'UPI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png',
    description: 'Unified Payments Interface for instant real-time payments',
    features: [
      'Direct bank transfers',
      '24/7 availability',
      'Multiple bank accounts',
      'QR code payments'
    ]
  },
  {
    name: 'Paytm',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%282019%29.svg/2560px-Paytm_Logo_%282019%29.svg.png',
    description: 'India\'s leading digital payments and financial services platform',
    features: [
      'Mobile wallet',
      'Bill payments',
      'Money transfers',
      'Shopping rewards'
    ]
  }
];