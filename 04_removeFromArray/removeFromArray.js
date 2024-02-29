const removeFromArray = function (array, ...args) {
  const newArray = [];
  // loop over every element of arr
  for (const one of array) {
    // if args doesn't include arr's element add the element to the newArray
    if (!args.includes(one)) {
      newArray.push(one);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
