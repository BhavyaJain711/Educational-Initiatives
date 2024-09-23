import { PaymentStrategy } from '../interfaces/PaymentStrategy.js';

export class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Processing a credit card payment of $${amount}`);

    }
}
