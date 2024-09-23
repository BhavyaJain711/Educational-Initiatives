// src/classes/readingGlasses.ts
import { Spectacles } from './spectacles.js';

export class Sunglasses implements Spectacles {
  material: string;
  color: string;
  sphereRightEye: number;
  sphereLeftEye: number;
  cylinderRightEye: number;
  cylinderLeftEye: number;
  axisRightEye: number;
  axisLeftEye: number;
  templeDistance: number;
  polarizingPower:number;

  constructor(
    material: string,
    color: string,
    sphereRightEye: number,
    sphereLeftEye: number,
    cylinderRightEye: number,
    cylinderLeftEye: number,
    axisRightEye: number,
    axisLeftEye: number,
    templeDistance: number,
    polarizingPower:number
  ) {
    this.material = material;
    this.color = color;
    this.sphereRightEye = sphereRightEye;
    this.sphereLeftEye = sphereLeftEye;
    this.cylinderRightEye = cylinderRightEye;
    this.cylinderLeftEye = cylinderLeftEye;
    this.axisRightEye = axisRightEye;
    this.axisLeftEye = axisLeftEye;
    this.templeDistance = templeDistance;
    this.polarizingPower= polarizingPower;
  }

  description(): string {
    return `Sunglasses Glasses (Material: ${this.material}, Color: ${this.color}, Sphere: ${this.sphereRightEye}/${this.sphereLeftEye}, CYL: ${this.cylinderRightEye}/${this.cylinderLeftEye}, Axis: ${this.axisRightEye}/${this.axisLeftEye}, Temple Distance: ${this.templeDistance}) with Polarizing Power: ${this.polarizingPower}`;
  }
}
