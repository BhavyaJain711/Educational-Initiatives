export class Sunglasses {
    material;
    color;
    sphereRightEye;
    sphereLeftEye;
    cylinderRightEye;
    cylinderLeftEye;
    axisRightEye;
    axisLeftEye;
    templeDistance;
    polarizingPower;
    constructor(material, color, sphereRightEye, sphereLeftEye, cylinderRightEye, cylinderLeftEye, axisRightEye, axisLeftEye, templeDistance, polarizingPower) {
        this.material = material;
        this.color = color;
        this.sphereRightEye = sphereRightEye;
        this.sphereLeftEye = sphereLeftEye;
        this.cylinderRightEye = cylinderRightEye;
        this.cylinderLeftEye = cylinderLeftEye;
        this.axisRightEye = axisRightEye;
        this.axisLeftEye = axisLeftEye;
        this.templeDistance = templeDistance;
        this.polarizingPower = polarizingPower;
    }
    description() {
        return `Sunglasses Glasses (Material: ${this.material}, Color: ${this.color}, Sphere: ${this.sphereRightEye}/${this.sphereLeftEye}, CYL: ${this.cylinderRightEye}/${this.cylinderLeftEye}, Axis: ${this.axisRightEye}/${this.axisLeftEye}, Temple Distance: ${this.templeDistance}) with Polarizing Power: ${this.polarizingPower}`;
    }
}
