let fakeAPICall = require("./fakeAPICall");

describe("fakeAPICall", () => {
  test.skip("fetches user with correct id", async () => {
    const response = await fakeAPICall(4);
    expect(response).toEqual({ id: 4, name: "Alice" });
  });

  test("returns object with userid 3 and name alice with input 3", async () => {
    const response = await fakeAPICall(3);
    expect(response).toEqual({ id: 3, name: "Alice" });
  });

  test.todo("should do thing")
});
