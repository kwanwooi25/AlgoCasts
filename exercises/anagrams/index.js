// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution #2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
  return string
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}


// // solution #1
// function anagrams(stringA, stringB) {
//   // map string to object with the helper function
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   // if number of keys are different, it's not the same anyway
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   // if any of character has different value, return false
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) return false;
//   }

//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }


// // my solution
// function anagrams(stringA, stringB) {
//   const arrayA = stringA
//     .replace(/[^\w]/g, "")
//     .toLowerCase()
//     .split("");
//   const arrayB = stringB
//     .replace(/[^\w]/g, "")
//     .toLowerCase()
//     .split("");
//   let mapA = {};
//   let mapB = {};
//   let longerArray = arrayA;
//   let count = arrayA.length;
//   if (arrayA.length < arrayB.length) {
//     longerArray = arrayB;
//     count = arrayB.length;
//   }
//   let isAnagram = true;
  
//   for (let i = 0; i < arrayA.length; i++) {
//     if (mapA[arrayA[i]]) {
//       mapA[arrayA[i]] += 1;
//     } else {
//       mapA[arrayA[i]] = 1;
//     }
//   }

//   for (let i = 0; i < arrayB.length; i++) {
//     if (mapB[arrayB[i]]) {
//       mapB[arrayB[i]] += 1;
//     } else {
//       mapB[arrayB[i]] = 1;
//     }
//   }

//   for (let i = 0; i < count; i++) {
//     isAnagram = isAnagram
//       && mapA[longerArray[i]] === mapB[longerArray[i]];
//   }

//   return isAnagram;
// }

module.exports = anagrams;
