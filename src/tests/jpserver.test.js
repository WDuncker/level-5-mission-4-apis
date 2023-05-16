// import carValue from '../services/calcServices'
const carValue = require('../services/calcServices')

//HappyDays Scenario

test('Calculate car value with valid model and year', () => {
  //Arrange - as in arranging the inputs
  const model = 'Mustang'
  const year = '1969'
  const expected = 11469

  //Act - actual function call
  const result = calculateCarValue(model, year)

  //Assert - I think in assertaining the actual expectations:)
  expect(result).toEqual(expected)
})
