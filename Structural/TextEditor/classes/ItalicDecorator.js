export class ItalicDecorator {
    component;
    text;
    constructor(component) {
        this.component = component;
        this.text = component.render();
    }
    render() {
        return `<i>${this.component.render()}</i>`;
    }
}
