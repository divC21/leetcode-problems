var balancedStringSplit = function (s) {
  let temp = 0; // temp variable to keep track of the balance between 'R' and 'L'
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      temp++;
    } else {
      temp--;
    }
    if (temp === 0) {
      // when temp is 0, it means we have a balanced substring
      count++;
    }
  }
  return count;
};
