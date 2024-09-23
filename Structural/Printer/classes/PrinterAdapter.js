// PrinterAdapter: Adapter that makes OldPrinter compatible with USBPrinter
export class PrinterAdapter {
    oldPrinter;
    constructor(oldPrinter) {
        this.oldPrinter = oldPrinter;
    }
    printViaUSB(text) {
        // Adapting the call to the old printer
        this.oldPrinter.print(text);
    }
}
