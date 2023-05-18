"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthlyPremium = exports.yearlyPremium = void 0;
let yearly;
let monthly;
const yearlyPremium = (carValue, riskRating) => {
    //This if statement makes sure that invalid numbers cannot be submitted
    if (!(carValue > 0 && riskRating > 0)) {
        throw new Error("Car value and risk rating must be greater than 0");
    }
    yearly = (carValue * riskRating) / 100;
    return yearly;
};
exports.yearlyPremium = yearlyPremium;
const monthlyPremium = (yearly) => {
    //Use of math object to get two decimal places as per normal dollar value conventions
    monthly = Math.round((yearly / 12) * 100) / 100;
    return monthly;
};
exports.monthlyPremium = monthlyPremium;
