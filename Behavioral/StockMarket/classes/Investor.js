export class Investor {
    name;
    constructor(name) {
        this.name = name;
    }
    // Update method to handle notifications from StockMarket
    update(stockSymbol, stockPrice) {
        console.log(`[Investor ${this.name}] Notified: ${stockSymbol} is now $${stockPrice}`);
    }
}
