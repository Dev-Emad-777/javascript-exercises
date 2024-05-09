// ! Fn = Fn-1 + Fn-2
const fibonacci = function (n) {
  if (typeof n !== "number") {
    n = parseInt(n);
  }
  if (typeof n !== "number") {
    return "OOPS";
  }
  if (n < 0) return "OOPS";

  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
