export const yearlyPremium = (carValue: number, riskRating: number): number => {
  const yearlyPrem: number = (carValue * riskRating) / 100
  return yearlyPrem
}

export const monthlyPremium = (yearlyPrem: number): number => {
  const monthlyPrem = Math.round((yearlyPrem / 12) * 100) / 100
  return monthlyPrem
}
