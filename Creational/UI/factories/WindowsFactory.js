import { WindowsButton } from '../products/WindowsButton.js';
import { WindowsCheckbox } from '../products/WindowsCheckbox.js';
export class WindowsFactory {
    createButton() {
        return new WindowsButton();
    }
    createCheckbox() {
        return new WindowsCheckbox();
    }
}
