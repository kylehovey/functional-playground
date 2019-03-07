const {
  M,
  Y,
  compose,
  repeated,
} = require("../src/combinators/combinators.js");

describe("Composer", () => {
  it("Composes a unary function", () => {
    const square = x => x * x;

    expect(compose(square, square)(2)).toBe(16);
  });

  it("Composes an arbitrary amount of functions in reverse order", () => {
    const addSome = x => x + 8;
    const multiply = x => x * 2;
    const subtractSome = x => x - 3;

    expect(compose(addSome, multiply, subtractSome)(2)).toBe(6);
  });
});

describe("Repeated", () => {
  it("Composes a function with itself an arbitrary amount of times", () => {
    const collatz = n => (n % 2 === 0) ? (n / 2) : (3 * n + 1);

    expect(repeated(collatz, 25)(625)).toBe(1);
  });
});

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
