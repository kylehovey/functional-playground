/**
 * I learned how to make this from here:
 * http://raganwald.com/2018/09/10/why-y.html
 */

const compose = (...fns) => x => fns
  .slice()
  .reverse()
  .reduce((acc, f) => f(acc), x);

const repeated = (fn, n) => n !== 1
  ? x => repeated(fn, n - 1)(fn(x))
  : fn;

const M = f => f(f);

const Y = fn => M(
  maker => x => fn(maker(maker))(x)
);

module.exports = {
  M,
  Y,
  compose,
  repeated
};
