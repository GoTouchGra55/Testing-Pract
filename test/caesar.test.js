import { describe, expect, test } from "vitest";
import { caesarCypher } from "../src/caesar";

describe("Cypher function test", () => {
  test("Cypher test 1: Turn abc into bcd", () => {
    expect(caesarCypher("abc", 1)).toBe("bcd");
  });
  
  test("Cypher test 2: No change to empty string", () => {
    expect(caesarCypher("", 1)).toBe("");
  });
})