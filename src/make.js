module.exports = function make(...args) {
  return function fn(...x) {
    if (x[0] instanceof Function) {
      return args.length === 0 ? undefined : args.reduce(x[0]);
    }
    for (let i = 0; i < x.length; i += 1) {
      args.push(x[i]);
    }
    return make.apply(this, args);
  };
};
