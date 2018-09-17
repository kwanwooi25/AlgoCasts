// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution #2
// potential issue: double comparison
function palindrome(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

// // solution #1
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return reversed === str;
// }

// // my solution
// function palindrome(str) {
//   const reversed = str.split('')
//     .reduce((reversed, char) => char + reversed, '');

//   return str === reversed;
// }

module.exports = palindrome;
