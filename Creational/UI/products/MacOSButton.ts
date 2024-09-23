import { Button } from './Button.js';

export class MacOSButton implements Button {
    render(): void {
        console.log('Rendered macOS Button');
    }
}
