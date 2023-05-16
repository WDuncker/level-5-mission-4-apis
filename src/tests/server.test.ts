import { yearlyPremium } from "../services/calcService";
import { monthlyPremium } from "../services/calcService";

//Sunny day scenario

let yearly: number;

test("multiplies 3500 by 3 and divides by 100, provides answer 105", () => {
  //Arrange
  const input1 = 3500;
  const input2 = 3;
  const expected = 105;

  //Act
  yearly = yearlyPremium(input1, input2);

  //Assert
  expect(yearly).toBe(expected);
});

test("divides yearlyPremium result (105) by 12 to give monthly premium (8.75", () => {
  const expected = 8.75;

  //Act
  const actual = monthlyPremium(yearly);

  //Assert
  expect(actual).toBe(expected);
});

//Negative risk rating scenario

test("multiplies 7800 by -5 to throw an error", () => {
  const input1 = 7800;
  const input2 = -5;

  expect(() => {
    yearlyPremium(input1, input2);
  }).toThrowError("Car value and risk rating must be greater than 0");
});

//Nil carValue scenario

test("multiplies 0 by 4 to throw an error", () => {
  const input1 = 0;
  const input2 = 4;

  expect(() => {
    yearlyPremium(input1, input2);
  }).toThrowError("Car value and risk rating must be greater than 0");
});

//Nil risk rating scenario

test("multiplies 5000 by 0 to throw an error", () => {
  const input1 = 5000;
  const input2 = 0;

  expect(() => {
    yearlyPremium(input1, input2);
  }).toThrowError("Car value and risk rating must be greater than 0");
});

//negative carValue scenario
test("multiplies 5000 by 0 to throw an error", () => {
  const input1 = -2600;
  const input2 = 2;

  expect(() => {
    yearlyPremium(input1, input2);
  }).toThrowError("Car value and risk rating must be greater than 0");
});
