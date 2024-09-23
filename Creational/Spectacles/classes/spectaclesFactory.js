import { ReadingGlasses } from './readingGlasses.js';
import { Sunglasses } from './sunglasses.js'; // You need to create this class
import { BlueLightGlasses } from './blueLightGlasses.js'; // You need to create this class
export class SpectaclesFactory {
    static createSpectacle(type, material, color, sphereRightEye, sphereLeftEye, cylinderRightEye, cylinderLeftEye, axisRightEye, axisLeftEye, templeDistance, polarizingPower) {
        switch (type) {
            case 1:
                return new ReadingGlasses(material, color, sphereRightEye, sphereLeftEye, cylinderRightEye, cylinderLeftEye, axisRightEye, axisLeftEye, templeDistance);
            // Add cases for Sunglasses and Blue Light Glasses
            case 2:
                return new Sunglasses(material, color, sphereRightEye, sphereLeftEye, cylinderRightEye, cylinderLeftEye, axisRightEye, axisLeftEye, templeDistance, polarizingPower ?? 0);
            case 3:
                return new BlueLightGlasses(material, color, sphereRightEye, sphereLeftEye, cylinderRightEye, cylinderLeftEye, axisRightEye, axisLeftEye, templeDistance);
            default:
                return null;
        }
    }
}
