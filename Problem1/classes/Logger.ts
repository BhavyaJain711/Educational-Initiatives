export class Logger {
    static log(message: string): void {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    }
}
