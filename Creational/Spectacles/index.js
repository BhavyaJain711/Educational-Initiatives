// index.ts
import { SpectaclesFactory } from './classes/spectaclesFactory.js';
import { askQuestion, closePrompt } from './utils/prompts.js';
const materials = ['Plastic', 'Metal', 'Wood'];
const colors = ['Black', 'Brown', 'Blue', 'Green'];
async function main() {
    console.clear();
    console.log("Welcome to Spectacles Builder");
    const typeInput = await askQuestion("Choose the type of spectacles (1: Reading Glasses, 2: Sunglasses, 3: Blue Light Glasses): ");
    const type = parseInt(typeInput);
    console.clear();
    console.log("Materials:");
    materials.forEach((material, index) => console.log(`${index + 1}. ${material}`));
    const materialInput = await askQuestion("Choose material: ");
    const material = materials[parseInt(materialInput) - 1];
    console.clear();
    console.log("Colors:");
    colors.forEach((color, index) => console.log(`${index + 1}. ${color}`));
    const colorInput = await askQuestion("Choose color: ");
    const color = colors[parseInt(colorInput) - 1];
    console.clear();
    const sphereRightEye = parseFloat(await askQuestion("Enter Sphere (SPH) for right eye: "));
    const sphereLeftEye = parseFloat(await askQuestion("Enter Sphere (SPH) for left eye: "));
    const cylinderRightEye = parseFloat(await askQuestion("Enter Cylinder (CYL) for right eye: "));
    const cylinderLeftEye = parseFloat(await askQuestion("Enter Cylinder (CYL) for left eye: "));
    const axisRightEye = parseFloat(await askQuestion("Enter Axis for right eye (0-180): "));
    const axisLeftEye = parseFloat(await askQuestion("Enter Axis for left eye (0-180): "));
    const templeDistance = parseFloat(await askQuestion("Enter Temple Distance (in mm): "));
    if (type === 2) {
        const polarizingPower = parseFloat(await askQuestion("Enter Polarizing Power: "));
        const spectacle = SpectaclesFactory.createSpectacle(type, material, color, sphereRightEye, sphereLeftEye, cylinderRightEye, cylinderLeftEye, axisRightEye, axisLeftEye, templeDistance, polarizingPower);
        console.clear();
        if (spectacle) {
            console.log(`You created: ${spectacle.description()}`);
        }
        closePrompt();
        return;
    }
    const spectacle = SpectaclesFactory.createSpectacle(type, material, color, sphereRightEye, sphereLeftEye, cylinderRightEye, cylinderLeftEye, axisRightEye, axisLeftEye, templeDistance);
    console.clear();
    if (spectacle) {
        console.log(`You created: ${spectacle.description()}`);
    }
    closePrompt();
}
main();
