var lengthOfLongestSubstring = function (s) {
  let seen = {};
  let result = "";
  let max = 0;
  let i = 0;
  while (i < s.length) {
    if (!seen[s[i]]) {
      seen[s[i]] = i;
      result += s[i];
      max = result.length;
      i++;
    } else {
      i = seen[s[i]];
      max = result.length;
      result = "";
    }
  }
  return max;
};
