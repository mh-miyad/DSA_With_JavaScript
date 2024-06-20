// const array = [2, 3, 4, 2, 5, 4];

// function findDuplicate(data) {
//   let duplicate = [];

//   for (let i = 0; i < data.length; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//       if (data[j] === data[i]) {
//         duplicate.push(data[i]);
//       }
//     }
//   }
//   return duplicate;
// }

// console.log(findDuplicate(array));
function findDuplicate(data) {
  const seen = new Set(); // Use a Set for faster lookups
  const duplicates = new Set();

  for (const element of data) {
    if (seen.has(element)) {
      duplicates.add(element); // Found a duplicate
    } else {
      seen.add(element); // Add the element to the set
    }
  }

  return Array.from(duplicates); // Convert Set to an array
}

const array = [2, 3, 4, 2, 5, 4];
console.log(findDuplicate(array)); // Output: [2, 4]
