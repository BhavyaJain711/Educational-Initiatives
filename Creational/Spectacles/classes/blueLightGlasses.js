export class BlueLightGlasses {
    material;
    color;
    sphereRightEye;
    sphereLeftEye;
    cylinderRightEye;
    cylinderLeftEye;
    axisRightEye;
    axisLeftEye;
    templeDistance;
    constructor(material, color, sphereRightEye, sphereLeftEye, cylinderRightEye, cylinderLeftEye, axisRightEye, axisLeftEye, templeDistance) {
        this.material = material;
        this.color = color;
        this.sphereRightEye = sphereRightEye;
        this.sphereLeftEye = sphereLeftEye;
        this.cylinderRightEye = cylinderRightEye;
        this.cylinderLeftEye = cylinderLeftEye;
        this.axisRightEye = axisRightEye;
        this.axisLeftEye = axisLeftEye;
        this.templeDistance = templeDistance;
    }
    description() {
        return `Blue Light Glasses (Material: ${this.material}, Color: ${this.color}, Sphere: ${this.sphereRightEye}/${this.sphereLeftEye}, CYL: ${this.cylinderRightEye}/${this.cylinderLeftEye}, Axis: ${this.axisRightEye}/${this.axisLeftEye}, Temple Distance: ${this.templeDistance})`;
    }
}
