export const calculateCarValue = (model: string, year: string) => {
  if (!model || !year) {
    return { error: 'Model and year are required.' }
  }

  const modelValue = model
    .toUpperCase()
    .split('')
    .reduce((acc, letter) => acc + (letter.charCodeAt(0) - 64) * 100, 0)

  const carValue = modelValue + parseInt(year, 10)

  return { carValue }
}
