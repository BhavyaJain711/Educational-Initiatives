export interface Observer {
    update(stockSymbol: string, stockPrice: number): void;
}
