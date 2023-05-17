// START
export const calculateCarValue = (model, year) => {
  if (!model || !year) {
    return { error: 'Model and year are required.' }
  }

  const modelValue = model
    .toUpperCase()
    .split('')
    .reduce((acc, letter) => acc + (letter.charCodeAt(0) - 64) * 100, 0)

  const carValue = modelValue + parseInt(year)

  return { carValue }
}
// // export function calculateCarValue(
// //   model: string,
// //   year: number
// // ): number {
// //   let totalValue = 0

// //   for (let i = 0; i < model.length; i++) {
// //     const letterValue = model.charCodeAt(i) - 96
// //     totalValue += letterValue
// //   }

// //   const multipliedValue = totalValue * 100

// //   const answer = multipliedValue + year

// //   return answer
// // }

// // export const calculateCarValue = (model: string, year: string) => {
// //   if (!model || !year) {
// //     return { error: 'Model and year are required.' }
// //   }

// //   const modelValue = model
// //     .toUpperCase()
// //     .split('')
// //     .reduce((acc, letter) => acc + (letter.charCodeAt(0) - 64) * 100, 0)

// //   const carValue = modelValue + parseInt(year, 10)

// //   return { carValue }
// // }

// let yearly: number
// let monthly: number

// export const yearlyPremium = (carValue: number, riskRating: number): number => {
//   //This if statement makes sure that invalid numbers cannot be submitted
//   if (!(carValue > 0 && riskRating > 0)) {
//     throw new Error('Car value and risk rating must be greater than 0')
//   }

//   yearly = (carValue * riskRating) / 100
//   return yearly
// }

// export const monthlyPremium = (yearly: number): number => {
//   //Use of math object to get two decimal places as per normal dollar value conventions
//   monthly = Math.round((yearly / 12) * 100) / 100
//   return monthly
// }
