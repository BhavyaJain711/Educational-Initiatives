export class UnderlineDecorator {
    component;
    text;
    constructor(component) {
        this.component = component;
        this.text = component.render();
    }
    render() {
        return `<u>${this.component.render()}</u>`;
    }
}
