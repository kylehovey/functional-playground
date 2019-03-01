const { M, Y } = require("../../src/combinators/combinators.js");

describe("M Combinator", () => {
  it("Calls a function on itself", () => {
    expect(M(x => x).toString()).toBe("x => x");
  });
});

describe("Y Combinator", () => {
  it("Allows definition of anonymous recursion", () => {
    const fact = Y(
      self => n => n === 0 ? 1 : n * self(n - 1)
    );

    expect(fact(3)).toBe(6);
  });
});
