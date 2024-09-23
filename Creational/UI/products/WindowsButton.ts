import { Button } from './Button.js';

export class WindowsButton implements Button {
    render(): void {
        console.log('Rendered Windows Button');
    }
}
