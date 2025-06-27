import { describe, expect, test } from "vitest";
import { capitalize } from "../src/capitalize";

describe("Capitalize function test", () => {
  test("Capitalize b to be B", () => {
    expect(capitalize("b")).toBe("B");
  });
  test("Capitalize string to be STRING", () => {
    expect(capitalize("string")).toBe("STRING");
  });
  test("No changes to empty string", () => {
    expect(capitalize("")).toBe("");
  });
})