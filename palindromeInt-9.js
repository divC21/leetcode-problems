var isPalindrome = function (x) {
  if (x < 0) return false;

  let result = 0;
  let value = x;
  while (value) {
    result = result * 10 + (value % 10);
    value = Math.floor(value / 10);
  }
  return result === x;
};

//get last digit x%10
//remove last digit Math.floor(x/10)
//to add last digit to result result = result*10 + last digit
