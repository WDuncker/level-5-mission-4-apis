import { yearlyPremium } from '../../services/calcService'
import { monthlyPremium } from '../../services/calcService'

//Sunny day scenario

test('multiplies 3500 by 3 and divides by 100, provides answer 105', () => {
  //Arrange
  const input1 = 3500
  const input2 = 3
  const expected = 105

  //Act
  const yearlyPrem: number | null = yearlyPremium(input1, input2)

  //Assert
  expect(yearlyPrem).toBe(expected)
})

test('divides 105 by 12 to give monthly premium (8.75', () => {
  const input = 105
  const expected = 8.75

  //Act
  const actual = monthlyPremium(input)

  //Assert
  expect(actual).toBe(expected)
})
