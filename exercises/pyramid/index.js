// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// solution #2
function pyramid(n, row = 0, level = '') {
  if (n === row) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add = ' ';
  if (midpoint - row <= level.length && level.length <= midpoint + row) {
    add = '#';
  }

  pyramid(n, row, level + add);
}

// // my solution
// function pyramid(n) {
//   const totalCols = n * 2 - 1;

//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let col = 1; col <= totalCols; col++) {
//       if ((n - row) <= col && col <= (n + row)) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }

module.exports = pyramid;
