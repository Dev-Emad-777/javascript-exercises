const add = function (...nums) {
  return nums.reduce((total, current) => {
    return total + current;
  });
};

const subtract = function (...nums) {
  return nums.reduce((total, current) => {
    return total - current;
  });
};

const sum = function (arr) {
  return arr.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, current) => {
    return total * current;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  const arr = [];

  for (let i = a; i > 0; i--) {
    arr.push(i);
  }

  return arr.reduce((total, current) => {
    return total * current;
  }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
