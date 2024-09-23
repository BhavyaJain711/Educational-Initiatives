
import { TextComponent } from '../interfaces/TextComponent.js';



export class BoldDecorator implements TextComponent {

    private component: TextComponent;

    public text: string;



    constructor(component: TextComponent) {

        this.component = component;

        this.text = component.render();

    }



    render(): string {

        return `<b>${this.component.render()}</b>`;

    }

}
