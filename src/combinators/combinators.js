/**
 * I learned how to make this from here:
 * http://raganwald.com/2018/09/10/why-y.html
 */

const M = f => f(f);

const Y = fn => M(
  maker => x => fn(maker(maker))(x)
);

module.exports = { M, Y };
