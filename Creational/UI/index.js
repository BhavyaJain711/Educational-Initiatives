import { WindowsFactory } from './factories/WindowsFactory.js';
import { MacOSFactory } from './factories/MacOSFactory.js';
function renderUI(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    button.render();
    checkbox.render();
}
// Create UI using WindowsFactory or MacOSFactory
let factory;
const platform = 'Windows'; // You can dynamically set the platform
if (platform === 'Windows') {
    factory = new WindowsFactory();
}
else {
    factory = new MacOSFactory();
}
renderUI(factory);
