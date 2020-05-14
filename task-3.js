const findLongestWord = function (string) {
  setOfWords = string.split(' ');
  let longestWord = setOfWords[0];
  for (let i = 1; i < setOfWords.length; i += 1) {
    if (setOfWords[i].length > longestWord.length) {
      longestWord = setOfWords[i];
    }
  }
  return longestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
