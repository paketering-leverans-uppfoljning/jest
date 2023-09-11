const concatenate = require("./concatenate");

describe("Add function", () => {
  it("should return 5 with inputs 3 and 2", () => {
    expect(concatenate.add(3, 2)).toBe(5);
  });

  it("should return 7 with inputs 3 and 4", () => {
    expect(concatenate.add(3, 4)).toBe(7);
  });

  it("should throw an error with strings as input", () => {
    expect(() => concatenate.add("asd", "asd")).toThrow();
  });
});
