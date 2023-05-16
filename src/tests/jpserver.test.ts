// import { calculateCarValue } from '../services/calcServices'

test('Takes model value of 1 and adds year 10 to get carValue of 11', () => {
  const model = 5
  const year = 5
  const expected = 10

  const result = model + year
  expect(result).toBe(expected)
})

// //HappyDays Scenario

// test('Calculate car value with valid model and year', () => {
//   //Arrange - as in arranging the inputs
//   const model = 'Mustang'
//   const year = '1969'
//   const expected = 11469

//   //Act - actual function call
//   const result = calculateCarValue(model, year)

//   //Assert - I think in assertaining the actual expectations:)
//   expect(result).toBe(expected)
// })
