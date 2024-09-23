import { PaymentStrategy } from '../interfaces/PaymentStrategy.js';

export class CryptocurrencyPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Processing a cryptocurrency payment of $${amount}`);
    }
}
