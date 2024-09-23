import { Printer } from '../interfaces/Printer.js';

// OldPrinter class: Legacy printer that prints in a specific way
export class OldPrinter implements Printer {
    print(text: string): void {
        console.log(`Old Printer: ${text}`);
    }
}
