export const yearlyPremium = (carValue: number, riskRating: number): number => {
  // if (carValue === null || riskRating === null) {
  //   throw new Error('You must enter a value in both fields')
  // }
  // if (!(carValue > 0 && riskRating > 0)) {
  //   throw new Error('Car value and risk rating must be greater than 0')
  // }
  const yearlyPrem: number = (carValue * riskRating) / 100
  return yearlyPrem
}

export const monthlyPremium = (yearlyPrem: number): number => {
  const monthlyPrem = Math.round((yearlyPrem / 12) * 100) / 100
  return monthlyPrem
}
