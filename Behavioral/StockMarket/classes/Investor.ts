import { Observer } from '../interfaces/Observer.js';

export class Investor implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Update method to handle notifications from StockMarket
    update(stockSymbol: string, stockPrice: number): void {
        console.log(`[Investor ${this.name}] Notified: ${stockSymbol} is now $${stockPrice}`);
    }
}
