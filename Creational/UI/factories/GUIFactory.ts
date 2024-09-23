import { Button } from '../products/Button.js';
import { Checkbox } from '../products/Checkbox.js';

export interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}
