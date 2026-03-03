var findWordsContaining = function (words, x) {
  let res = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
};

//Time Complexity: O(n*m) where n is the number of words and m is the average length of the words.
//Space Complexity: O(1) as we only use a constant amount of extra space (the result array is not counted in space complexity).
