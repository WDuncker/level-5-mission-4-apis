"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCarValue = void 0;
const calculateCarValue = (model, year) => {
    if (!model || !year) {
        return { error: 'Model and year are required.' };
    }
    const modelValue = model
        .toUpperCase()
        .split('')
        .reduce((acc, letter) => acc + (letter.charCodeAt(0) - 64) * 100, 0);
    const carValue = modelValue + year;
    return { carValue };
};
exports.calculateCarValue = calculateCarValue;
