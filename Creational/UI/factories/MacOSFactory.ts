import { GUIFactory } from './GUIFactory.js';
import { Button } from '../products/Button.js';
import { Checkbox } from '../products/Checkbox.js';
import { MacOSButton } from '../products/MacOSButton.js';
import { MacOSCheckbox } from '../products/MacOSCheckbox.js';

export class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton();
    }

    createCheckbox(): Checkbox {
        return new MacOSCheckbox();
    }
}
