import { beforeEach, describe, expect, test } from "vitest";
import { Calculator } from "../src/calculator";

describe("Calculator object test", () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator;
  });

  test("Addition test: Adds 1 and 1 to be 2", () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test("Subtraction test: Subtracts 1 from 1 to be 0", () => {
    expect(calculator.subtract(1 , 1)).toBe(0);
  });

  test("Division test: Divide 4 by 2 to be 2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  })

  test("Multiplication test: Multiply 2 by 2 to be 4", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  })
})