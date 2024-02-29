const reverseString = function (str) {
  const strArray = [];
  for (let i = 0, length = str.length; i < length; i++) {
    strArray[i] = str[i];
  }
  return (strArray.reverse()).join("")
};
// Do not edit below this line
module.exports = reverseString;
