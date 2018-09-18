// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// my solution
function maxChar(str) {
  let chars = {};
  let maxCount = 0;
  let maxChar = '';

  for (let char of str) {
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }

  Object.keys(chars).forEach(key => {
    if (maxCount < chars[key]) {
      maxCount = chars[key];
      maxChar = key;
    }
  });

  return maxChar;
}

module.exports = maxChar;
