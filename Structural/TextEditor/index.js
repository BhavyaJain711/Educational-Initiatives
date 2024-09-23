import { PlainText } from './classes/PlainText.js';
import { BoldDecorator } from './classes/BoldDecorator.js';
import { ItalicDecorator } from './classes/ItalicDecorator.js';
import { UnderlineDecorator } from './classes/UnderlineDecorator.js';
// Creating a plain text component
let textComponent = new PlainText("Hello, World!");
// Applying bold style
textComponent = new BoldDecorator(textComponent);
console.log(textComponent.render()); // Output: <b>Hello, World!</b>
// Applying italic style
textComponent = new ItalicDecorator(textComponent);
console.log(textComponent.render()); // Output: <i><b>Hello, World!</b></i>
// Applying underline style
textComponent = new UnderlineDecorator(textComponent);
console.log(textComponent.render()); // Output: <u><i><b>Hello, World!</b></i></u>
