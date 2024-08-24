const greet = require("./greet");

describe("Greet function", () => {
  test("should greet with appropiate name", () => {
    expect(greet("Kristian")).toBe("Hello, Kristian!");
  });

  it("should be able to greet with another name", () => {
    expect(greet("Emma")).toBe("Hello, Emma!");
  });

  test("should throw on number input", () => {
    expect(() => greet(1)).toThrow()
  })
});
