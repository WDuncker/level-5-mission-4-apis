interface CarValueResult {
  carValue?: number
  error?: string
}

export const calculateCarValue = (
  model: string,
  year: number
): CarValueResult => {
  if (!model || !year) {
    return { error: 'Model and year are required.' }
  }

  const modelValue = model
    .toUpperCase()
    .split('')
    .filter((letter) => /^[A-Z]+$/.test(letter))
    .reduce((acc, letter) => acc + (letter.charCodeAt(0) - 64) * 100, 0)

  const carValue = modelValue + year

  return { carValue }
}
