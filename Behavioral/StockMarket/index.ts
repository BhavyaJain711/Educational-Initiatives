import { StockMarket } from './classes/StockMarket.js';
import { Investor } from './classes/Investor.js';

const stockMarket = new StockMarket();

const investor1 = new Investor('Aman');
const investor2 = new Investor('Bhavya');
const investor3 = new Investor('Chetan');

// Registering investors to observe stock price updates
stockMarket.registerObserver(investor1);
stockMarket.registerObserver(investor2);
stockMarket.registerObserver(investor3);

// Simulating stock price changes
stockMarket.setStockPrice('AAPL', 150);
stockMarket.setStockPrice('GOOG', 2800);

// Unregistering one investor
stockMarket.removeObserver(investor2);

// Simulating more stock price changes
stockMarket.setStockPrice('AAPL', 155);
stockMarket.setStockPrice('GOOG', 2850);
