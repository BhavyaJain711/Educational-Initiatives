import { PaymentStrategy } from '../interfaces/PaymentStrategy.js';

export class PaymentContext {
    private paymentStrategy: PaymentStrategy | null = null;

    // Set the payment strategy dynamically
    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.paymentStrategy = strategy;
    }

    // Execute the payment based on the chosen strategy
    pay(amount: number): void {
        if (this.paymentStrategy) {
            this.paymentStrategy.pay(amount);
        } else {
            console.log("Payment strategy is not set!");
        }
    }
}
