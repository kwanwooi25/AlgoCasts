// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution #3
function reverse(str) {
  return str.split('')
    .reduce((reversed, char) => char + reversed, '');
}

// // solution #2
// function reverse(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// // solution #1
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// // my solution
// function reverse(str) {
//   let reversed = [];
//   str.split('').forEach(char => {
//     reversed.unshift(char);
//   });

//   return reversed.join('');
// }

module.exports = reverse;
