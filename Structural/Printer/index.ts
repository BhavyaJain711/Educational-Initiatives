import { PrinterAdapter } from './classes/PrinterAdapter.js';
import { OldPrinter } from './classes/OldPrinter.js';

const oldPrinter = new OldPrinter();
const adapter = new PrinterAdapter(oldPrinter);

// Use the adapter to print via USB
adapter.printViaUSB("Hello, Adapter Pattern!");
