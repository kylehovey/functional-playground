const M = f => f(f);

const Y = fn => M(
  maker => x => fn(maker(maker))(x)
);

module.exports = { M, Y };
