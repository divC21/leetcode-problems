var isPalindrome = function (s) {
  let result = s.replace(/[^a-zA-Z0-9]/g, "");
  result = result.toLowerCase();
  let i = 0;
  let j = result.length - 1;
  while (i < j) {
    if (result[i] === result[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
