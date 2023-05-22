"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthlyPremium = exports.yearlyPremium = void 0;
const yearlyPremium = (carValue, riskRating) => {
    if (!(carValue > 0 && riskRating > 0)) {
        throw new Error('Car value and risk rating must be greater than 0');
    }
    const yearlyPrem = (carValue * riskRating) / 100;
    return yearlyPrem;
};
exports.yearlyPremium = yearlyPremium;
const monthlyPremium = (yearlyPrem) => {
    const monthlyPrem = Math.round((yearlyPrem / 12) * 100) / 100;
    return monthlyPrem;
};
exports.monthlyPremium = monthlyPremium;
