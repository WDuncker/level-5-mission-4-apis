"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { calculateCarValue } = require('../services/calcServices')
// TypeScript formatting below
const calcServices_1 = require("../services/calcServices");
// Sunny day scenario:
test('Take model Mustang (Value 95) * 100 and adds 1969', () => {
    // Arrange
    const input1 = 'mustang';
    const input2 = 1969;
    const expected = { carValue: 11469 };
    // let theValue: { carValue: number }
    // Act
    let theValue = (0, calcServices_1.calculateCarValue)(input1, input2);
    // Assert
    expect(theValue).toStrictEqual(expected);
});
test('Take in model (ignoring numbers) and * 100, then adding year', () => {
    // Arrange
    const input1 = 'mustang45';
    const input2 = 1969;
    const expected = { carValue: 11469 };
    // let theValue: { carValue: number }
    // Act
    let theValue = (0, calcServices_1.calculateCarValue)(input1, input2);
    // Assert
    expect(theValue).toStrictEqual(expected);
});
test('Take in model numbers only, ignoring the numbers then adding year', () => {
    // Arrange
    const input1 = '911';
    const input2 = 1969;
    const expected = { carValue: 1969 };
    // let theValue: { carValue: number }
    // Act
    let theValue = (0, calcServices_1.calculateCarValue)(input1, input2);
    // Assert
    expect(theValue).toStrictEqual(expected);
});
test('Take in model ignoring symbols & numbers, * 100 and then adding year', () => {
    // Arrange
    const input1 = 'fast-back';
    const input2 = 1969;
    const expected = { carValue: 8269 };
    // let theValue: { carValue: number }
    // Act
    let theValue = (0, calcServices_1.calculateCarValue)(input1, input2);
    // Assert
    expect(theValue).toStrictEqual(expected);
});
test('Take in "" for model and a value for year and return error message', () => {
    // Arrange
    const input1 = '';
    const input2 = 1969;
    const expected = { error: 'Model and year are required.' };
    // let theValue: { error: string } | { carValue: number }
    // Act
    let theValue = (0, calcServices_1.calculateCarValue)(input1, input2);
    // Assert
    expect(theValue).toStrictEqual(expected);
});
// SAVING THE JS VERSION JUST IN CASE:
// // import { calculateCarValue } from '../services/calcServices'
// // Sunny day scenario:
// test('Take model Mustang (Value 95) * 100 and adds 1969', () => {
//   // Arrange
//   const input1 = 'mustang'
//   const input2 = 1969
//   const expected = { carValue: 11469 }
//   let theValue
//   // Act
//   theValue = calculateCarValue(input1, input2)
//   // Assert
//   expect(theValue).toStrictEqual(expected)
// })
// test('Take in model (ignoring numbers) and * 100, then adding year', () => {
//   // Arrange
//   const input1 = 'mustang45'
//   const input2 = 1969
//   const expected = { carValue: 11469 }
//   let theValue
//   // Act
//   theValue = calculateCarValue(input1, input2)
//   // Assert
//   expect(theValue).toStrictEqual(expected)
// })
// test('Take in model numbers only, ignoring the numbers then adding year', () => {
//   // Arrange
//   const input1 = '911'
//   const input2 = 1969
//   const expected = { carValue: 1969 }
//   let theValue
//   // Act
//   theValue = calculateCarValue(input1, input2)
//   // Assert
//   expect(theValue).toStrictEqual(expected)
// })
// test('Take in model ignoring symbols & numbers, * 100 and then adding year', () => {
//   // Arrange
//   const input1 = 'fast-back'
//   const input2 = 1969
//   const expected = { carValue: 8269 }
//   let theValue
//   // Act
//   theValue = calculateCarValue(input1, input2)
//   // Assert
//   expect(theValue).toStrictEqual(expected)
// })
// test('Take in "" for model and a value for year and return error message', () => {
//   // Arrange
//   const input1 = ''
//   const input2 = 1969
//   const expected = { error: 'Model and year are required.' }
//   let theValue
//   // Act
//   theValue = calculateCarValue(input1, input2)
//   // Assert
//   expect(theValue).toStrictEqual(expected)
// })
