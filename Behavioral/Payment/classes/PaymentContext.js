export class PaymentContext {
    paymentStrategy = null;
    // Set the payment strategy dynamically
    setPaymentStrategy(strategy) {
        this.paymentStrategy = strategy;
    }
    // Execute the payment based on the chosen strategy
    pay(amount) {
        if (this.paymentStrategy) {
            this.paymentStrategy.pay(amount);
        }
        else {
            console.log("Payment strategy is not set!");
        }
    }
}
