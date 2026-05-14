var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let sObj = {};

  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] = (sObj[s[i]] && sObj[s[i]] + 1) || 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (sObj[t[i]]) sObj[t[i]] = sObj[t[i]] && sObj[t[i]] - 1;
    else return false;
  }

  return true;
};
