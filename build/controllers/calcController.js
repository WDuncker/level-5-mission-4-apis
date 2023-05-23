"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcPremiums = void 0;
const calcService = __importStar(require("../services/calcService"));
var premiumTypes;
(function (premiumTypes) {
    premiumTypes["yearly"] = "Yearly Premium";
    premiumTypes["monthly"] = "Monthly Premium";
})(premiumTypes || (premiumTypes = {}));
const calcPremiums = (req, res) => {
    try {
        const { carValue, riskRating } = req.body;
        if (carValue === null || riskRating === null) {
            throw new Error('You must enter a value in both fields');
        }
        if (!(carValue > 0 && riskRating > 0)) {
            throw new Error('Car value and risk rating must be greater than 0');
        }
        const yearlyPremium = calcService.yearlyPremium(carValue, riskRating);
        const monthlyPremium = calcService.monthlyPremium(yearlyPremium);
        const premiums = [
            { type: premiumTypes.yearly, premium: yearlyPremium },
            { type: premiumTypes.monthly, premium: monthlyPremium },
        ];
        res.json(premiums);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.calcPremiums = calcPremiums;
