import { describe, test, expect } from "vitest";
import { reverseString } from "../src/reverse";

describe("Reverse function test", () => {
  test("Reverse ABC to be CBA", () => {
    expect(reverseString("ABC")).toBe("CBA");
  });
  test("Reverse javascript to be tpircsavaj", () => {
    expect(reverseString("javascript")).toBe("tpircsavaj");
  });
  test("No changes to empty string", () => {
    expect(reverseString("")).toBe("");
  });
})