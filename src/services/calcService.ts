let yearly: number;
let monthly: number;

export const yearlyPremium = (carValue: number, riskRating: number): number => {
  //This if statement makes sure that invalid numbers cannot be submitted
  if (!(carValue > 0 && riskRating > 0)) {
    throw new Error("Car value and risk rating must be greater than 0");
  }

  yearly = (carValue * riskRating) / 100;
  return yearly;
};

export const monthlyPremium = (yearly: number): number => {
  //Use of math object to get two decimal places as per normal dollar value conventions
  monthly = Math.round((yearly / 12) * 100) / 100;
  return monthly;
};
