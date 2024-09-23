import { USBPrinter } from '../interfaces/USBPrinter.js';
import { OldPrinter } from './OldPrinter.js';

// PrinterAdapter: Adapter that makes OldPrinter compatible with USBPrinter
export class PrinterAdapter implements USBPrinter {
    private oldPrinter: OldPrinter;

    constructor(oldPrinter: OldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    printViaUSB(text: string): void {
        // Adapting the call to the old printer
        this.oldPrinter.print(text);
    }
}
