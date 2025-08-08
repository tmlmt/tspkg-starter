import { describe, it, expect } from "vitest";
import { greet } from "../src/index";

describe("greet", () => {
  it("should greet a user by name", () => {
    expect(greet({ id: 1, name: "Thomas" })).toBe("Hello, Thomas!");
  });
});
