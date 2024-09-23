import { Observer } from '../interfaces/Observer.js';

export class ConflictObserver implements Observer {
    notify(message: string): void {
        console.log(`Notification: ${message}`);
    }
}
