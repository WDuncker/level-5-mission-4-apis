let yearly: number;
let monthly: number;

export const yearlyPremium = (carValue: number, riskRating: number): number => {
  if (!(carValue > 0 && riskRating > 0)) {
    throw new Error("Car value and risk rating must be greater than 0");
  }

  yearly = (carValue * riskRating) / 100;
  return yearly;
};

export const monthlyPremium = (yearly: number): number => {
  monthly = Math.round((yearly / 12) * 100) / 100;
  return monthly;
};
