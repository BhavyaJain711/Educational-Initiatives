import { PaymentStrategy } from '../interfaces/PaymentStrategy.js';

export class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Processing a PayPal payment of $${amount}`);
    }
}
