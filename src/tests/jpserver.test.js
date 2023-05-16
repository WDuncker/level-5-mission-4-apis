import carValue from '../services/calcServices'

// carValue = (Total sum of value of each letter in model) + year

//HappyDays Scenario

test('Calculate car value with valid model and year', () => {
  const model = 'Toyota Camry'
  const year = '2018'
  const expected = { carValue: 3059 }

  const result = calculateCarValue(model, year)

  expect(result).toEqual(expected)
})
