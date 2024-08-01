function findDuplicate(data) {
  let duplicate = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] === data[i]) {
        duplicate.push(data[i]);
      }
    }
  }
  return duplicate;
}

console.log(findDuplicate(array));
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

// const array = [2, 3, 4, 2, 5, 4];
console.log(findDuplicate(array)); // Output: [2, 4]

//=========================================
let array = [0, -1, 2, -3, 1];
let x = -2;
const pairOfSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log("Yes");
        return;
      }
    }
  }
  console.log("No");
};

// pairOfSum(array, x

// Test cases
pairOfSum([0, -1, 2, -3, 1], -2); // Output: Yes
pairOfSum([1, -2, 1, 0, 5], 0); // Output: No

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

console.log(checkPair([1, 4, 45, 6, 10, -8], 16));
data.sort((a, b) => a - b);

console.log(data);

data.sort((a, b) => b - a);

console.log(data);

// 1. Find the sum of all elements in an array

let sum = 0;
for (let i = 0; i < data.length; i++) {
  sum += data[i];
}

console.log(sum);

// 2. Find the maximum and minimum element in an array

let max = data[0];
let min = data[0];
for (let i = 0; i < data.length; i++) {
  if (data[i] > max) {
    max = data[i];
  }
  if (data[i] < min) {
    min = data[i];
  }
}

console.log(max, min);

// 3. Find the second maximum and second minimum element in an array

let secondMax = data[0];
let secondMin = data[0];
for (let i = 0; i < data.length; i++) {
  if (data[i] > secondMax && data[i] < max) {
    secondMax = data[i];
  }
  if (data[i] < secondMin && data[i] > min) {
    secondMin = data[i];
  }
}

console.log(secondMax, secondMin);

// 4. Find the third maximum and third minimum element in an array

let thirdMax = data[0];
let thirdMin = data[0];
for (let i = 0; i < data.length; i++) {
  if (data[i] > thirdMax && data[i] < secondMax) {
    thirdMax = data[i];
  }
  if (data[i] < thirdMin && data[i] > secondMin) {
    thirdMin = data[i];
  }
}

console.log(thirdMax, thirdMin);
