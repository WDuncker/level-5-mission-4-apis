interface CarValueResult {
  carValue?: number
  error?: string
}

export const calculateCarValue = (
  model: string,
  year: string
): CarValueResult => {
  if (!model || !year) {
    return { error: 'Model and year are required.' }
  }

  const modelValue = model
    .toUpperCase()
    .split('')
    .filter((letter) => /^[A-Z]+$/.test(letter))
    .reduce((acc, letter) => acc + (letter.charCodeAt(0) - 64) * 100, 0)

  const carValue = modelValue + parseInt(year)

  return { carValue }
}

// SAVING THE OLD JS WAY JUST IN CASE:
// export const calculateCarValue = (model, year) => {
//   if (!model || !year) {
//     return { error: 'Model and year are required.' }
//   }

//   const modelValue = model
//     .toUpperCase()
//     .split('')
//     .filter((letter) => /^[A-Z]+$/.test(letter))
//     .reduce((acc, letter) => acc + (letter.charCodeAt(0) - 64) * 100, 0)

//   const carValue = modelValue + parseInt(year)

//   return { carValue }
// }
