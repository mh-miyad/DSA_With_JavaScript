// let array = [0, -1, 2, -3, 1];
// let x = -2;
// const pairOfSum = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         console.log("Yes");
//         return;
//       }
//     }
//   }
//   console.log("No");
// };

// // pairOfSum(array, x

// // Test cases
// pairOfSum([0, -1, 2, -3, 1], -2); // Output: Yes
// pairOfSum([1, -2, 1, 0, 5], 0); // Output: No

// Two Sum using Naive Approach:

const checkPair = (array, tar) => {
  const arr = [...array];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === tar) {
        console.log(`i found the target ${tar}`);
        return;
      }
    }
  }
  console.log("no found this number ");
};

console.log(checkPair([1, 4, 45, 6, 10, -8], 100));
