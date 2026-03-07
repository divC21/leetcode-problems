var maxFreqSum = function (s) {
  let vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  let consonants = {};
  let maxVowel = 0;
  let maxConsonant = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels[s[i]] > -1) {
      vowels[s[i]] = vowels[s[i]] + 1;
    } else {
      consonants[s[i]] = (consonants[s[i]] || 0) + 1;
    }
  }

  for (let vowel in vowels) {
    if (maxVowel < vowels[vowel]) {
      maxVowel = vowels[vowel];
    }
  }

  for (let consonant in consonants) {
    if (maxConsonant < consonants[consonant]) {
      maxConsonant = consonants[consonant];
    }
  }

  return maxConsonant + maxVowel;
};
