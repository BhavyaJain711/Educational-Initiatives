export class StockMarket {
    observers = [];
    stockPrices = new Map();
    // Register an observer (Investor)
    registerObserver(observer) {
        this.observers.push(observer);
    }
    // Remove an observer (Investor)
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    // Notify all registered observers about a stock price change
    notifyObservers(stockSymbol, stockPrice) {
        for (const observer of this.observers) {
            observer.update(stockSymbol, stockPrice);
        }
    }
    // Set stock price and notify observers
    setStockPrice(stockSymbol, stockPrice) {
        this.stockPrices.set(stockSymbol, stockPrice);
        console.log(`\n[StockMarket] ${stockSymbol} is now $${stockPrice}`);
        this.notifyObservers(stockSymbol, stockPrice);
    }
}
