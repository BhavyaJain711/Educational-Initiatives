import { TextComponent } from '../interfaces/TextComponent.js';

export class PlainText implements TextComponent {
    public text: string;

    constructor(text: string) {
        this.text = text;
    }

    render(): string {
        return this.text;
    }
}
