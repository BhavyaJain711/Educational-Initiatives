import { GUIFactory } from './GUIFactory.js';
import { Button } from '../products/Button.js';
import { Checkbox } from '../products/Checkbox.js';
import { WindowsButton } from '../products/WindowsButton.js';
import { WindowsCheckbox } from '../products/WindowsCheckbox.js';

export class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }

    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}
