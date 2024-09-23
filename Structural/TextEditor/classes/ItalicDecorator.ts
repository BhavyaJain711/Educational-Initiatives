
import { TextComponent } from '../interfaces/TextComponent.js';



export class ItalicDecorator implements TextComponent {

    private component: TextComponent;

    public text: string;



    constructor(component: TextComponent) {

        this.component = component;

        this.text = component.render();

    }



    render(): string {

        return `<i>${this.component.render()}</i>`;

    }

}
