let yearlyPrem: number
let monthlyPrem: number

export const yearlyPremium = (carValue: number, riskRating: number): number => {
  if (!(carValue > 0 && riskRating > 0)) {
    throw new Error('Car value and risk rating must be greater than 0')
  }

  yearlyPrem = (carValue * riskRating) / 100
  return yearlyPrem
}

export const monthlyPremium = (yearly: number): number => {
  monthlyPrem = Math.round((yearly / 12) * 100) / 100
  return monthlyPrem
}
