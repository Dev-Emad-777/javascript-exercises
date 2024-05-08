const palindromes = function (text) {
  // todo: store every char of the text in array
  const arr = Array.from(text);

  const original = arr.filter((item) => {
    let regex = /^[A-Za-z0-9]+$/;
    return regex.test(item);
  });
  // todo: copy that array but reversed
  const reversed = [];
  original.map((char) => reversed.unshift(char));
  // todo: compare both arrays values if equal return true
  return original.join().toLowerCase() == reversed.join().toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
