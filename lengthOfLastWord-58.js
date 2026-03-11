var lengthOfLastWord = function (s) {
  let count = 0;
  let visited = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    }
    if (count && s[i] === " ") break;
  }
  return count;
};
