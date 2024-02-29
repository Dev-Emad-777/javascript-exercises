function notNum(thing) {
  if (isNaN(thing) || typeof thing === "string") return true;
  else return false;
}
const sumAll = function (arg1, arg2) {
  if (notNum(arg1) || notNum(arg2) || arg1 < 0 || arg2 < 0) return "ERROR";

  let sum = 0;
  let start;
  let end;
  if (arg1 < arg2) {
    start = arg1;
    end = arg2;
  } else if (arg1 > arg2) {
    end = arg1;
    start = arg2;
  } else {
    start = end = arg1;
  }
  for (let i = start; i <= end; i++) sum += i;
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
