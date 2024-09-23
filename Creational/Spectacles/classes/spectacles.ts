// src/classes/spectacle.ts
export interface Spectacles {
  description(): string;
  material: string;
  color: string;
  sphereRightEye: number;  // Spherical power for the right eye
  sphereLeftEye: number;   // Spherical power for the left eye
  cylinderRightEye?: number;
  cylinderLeftEye?: number;
  axisRightEye?: number;
  axisLeftEye?: number;
  templeDistance?: number;
}
