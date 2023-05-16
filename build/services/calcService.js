"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthlyPremium = exports.yearlyPremium = void 0;
let yearly;
let monthly;
const yearlyPremium = (carValue, riskRating) => {
    if (!(carValue > 0 && riskRating > 0)) {
        throw new Error("Car value and risk rating must be greater than 0");
    }
    yearly = (carValue * riskRating) / 100;
    return yearly;
};
exports.yearlyPremium = yearlyPremium;
const monthlyPremium = (yearly) => {
    monthly = Math.round((yearly / 12) * 100) / 100;
    return monthly;
};
exports.monthlyPremium = monthlyPremium;
