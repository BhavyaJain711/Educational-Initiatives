import { Subject } from '../interfaces/Subject.js';
import { Observer } from '../interfaces/Observer.js';

export class StockMarket implements Subject {
    private observers: Observer[] = [];
    private stockPrices: Map<string, number> = new Map();

    // Register an observer (Investor)
    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    // Remove an observer (Investor)
    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Notify all registered observers about a stock price change
    notifyObservers(stockSymbol: string, stockPrice: number): void {
        for (const observer of this.observers) {
            observer.update(stockSymbol, stockPrice);
        }
    }

    // Set stock price and notify observers
    setStockPrice(stockSymbol: string, stockPrice: number): void {
        this.stockPrices.set(stockSymbol, stockPrice);
        console.log(`\n[StockMarket] ${stockSymbol} is now $${stockPrice}`);
        this.notifyObservers(stockSymbol, stockPrice);
    }
}
