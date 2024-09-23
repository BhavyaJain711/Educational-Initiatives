export class BoldDecorator {
    component;
    text;
    constructor(component) {
        this.component = component;
        this.text = component.render();
    }
    render() {
        return `<b>${this.component.render()}</b>`;
    }
}
