//Defining variables globally so they can accessed by either function
let yearlyPrem: number;
let monthlyPrem: number;

export const yearlyPremium = (carValue: number, riskRating: number): number => {
  //This if statement makes sure that invalid numbers cannot be submitted
  if (!(carValue > 0 && riskRating > 0)) {
    throw new Error("Car value and risk rating must be greater than 0");
  }

  yearlyPrem = (carValue * riskRating) / 100;
  return yearlyPrem;
};

export const monthlyPremium = (yearly: number): number => {
  //Use of math object to get two decimal places as per normal dollar value conventions
  monthlyPrem = Math.round((yearly / 12) * 100) / 100;
  return monthlyPrem;
};
