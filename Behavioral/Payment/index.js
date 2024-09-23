import { PaymentContext } from './classes/PaymentContext.js';
import { CreditCardPayment } from './classes/CreditCardPayment.js';
import { PayPalPayment } from './classes/PayPalPayment.js';
import { CryptocurrencyPayment } from './classes/CryptocurrencyPayment.js';
const paymentContext = new PaymentContext();
console.log("Choosing Credit Card Payment:");
paymentContext.setPaymentStrategy(new CreditCardPayment());
paymentContext.pay(1000); // Pay $1000 using Credit Card
console.log("\nChoosing PayPal Payment:");
paymentContext.setPaymentStrategy(new PayPalPayment());
paymentContext.pay(500); // Pay $500 using PayPal
console.log("\nChoosing Cryptocurrency Payment:");
paymentContext.setPaymentStrategy(new CryptocurrencyPayment());
paymentContext.pay(750); // Pay $750 using Cryptocurrency
