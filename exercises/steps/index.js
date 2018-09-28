// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solution #2
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  
  return steps(n, row, stair);
}

// // solution #1
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }

// // my solution
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let result = '';

//     for (let j = 1; j <= i; j++) {
//       result += '#';
//     }
//     for (let k = 0; k < n - i; k++) {
//       result += ' ';
//     }

//     console.log(result);
//   }
// }

module.exports = steps;
