"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcService_1 = require("../../services/calcService");
const calcService_2 = require("../../services/calcService");
//Sunny day scenario
test('multiplies 3500 by 3 and divides by 100, provides answer 105', () => {
    //Arrange
    const input1 = 3500;
    const input2 = 3;
    const expected = 105;
    //Act
    const yearlyPrem = (0, calcService_1.yearlyPremium)(input1, input2);
    //Assert
    expect(yearlyPrem).toBe(expected);
});
test('divides 105 by 12 to give monthly premium (8.75', () => {
    const input = 105;
    const expected = 8.75;
    //Act
    const actual = (0, calcService_2.monthlyPremium)(input);
    //Assert
    expect(actual).toBe(expected);
});
//Negative risk rating scenario
test('multiplies 7800 by -5 to throw an error', () => {
    const input1 = 7800;
    const input2 = -5;
    expect(() => {
        (0, calcService_1.yearlyPremium)(input1, input2);
    }).toThrowError('Car value and risk rating must be greater than 0');
});
//Nil carValue scenario
test('multiplies 0 by 4 to throw an error', () => {
    const input1 = 0;
    const input2 = 4;
    expect(() => {
        (0, calcService_1.yearlyPremium)(input1, input2);
    }).toThrowError('Car value and risk rating must be greater than 0');
});
//Nil risk rating scenario
test('multiplies 5000 by 0 to throw an error', () => {
    const input1 = 5000;
    const input2 = 0;
    expect(() => {
        (0, calcService_1.yearlyPremium)(input1, input2);
    }).toThrowError('Car value and risk rating must be greater than 0');
});
//negative carValue scenario
test('multiplies 5000 by 0 to throw an error', () => {
    const input1 = -2600;
    const input2 = 2;
    expect(() => {
        (0, calcService_1.yearlyPremium)(input1, input2);
    }).toThrowError('Car value and risk rating must be greater than 0');
});
//No entry in car value field
test('receives no car value input and throws an error', () => {
    const input1 = null;
    const input2 = 3;
    expect(() => {
        (0, calcService_1.yearlyPremium)(input1, input2);
    }).toThrowError('You must enter a value in both fields');
});
test('receives no risk rating input and throws an error', () => {
    const input1 = 4675;
    const input2 = null;
    expect(() => {
        (0, calcService_1.yearlyPremium)(input1, input2);
    }).toThrowError('You must enter a value in both fields');
});
test('receives input and throws an error', () => {
    const input1 = null;
    const input2 = null;
    expect(() => {
        (0, calcService_1.yearlyPremium)(input1, input2);
    }).toThrowError('You must enter a value in both fields');
});
