import { MacOSButton } from '../products/MacOSButton.js';
import { MacOSCheckbox } from '../products/MacOSCheckbox.js';
export class MacOSFactory {
    createButton() {
        return new MacOSButton();
    }
    createCheckbox() {
        return new MacOSCheckbox();
    }
}
