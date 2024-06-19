// function minDays(bloomDay, m, k) {
//   // Helper function to check if we can make m bouquets by day d
//   function needFlowers(day) {
//     let flowers = 0;
//     let bouquets = 0;
//     for (let i = 0; i < bloomDay.length; i++) {
//       if (bloomDay[i] <= day) {
//         flowers++;
//         if (flowers === k) {
//           bouquets++;
//           flowers = 0;
//         }
//       } else {
//         flowers = 0;
//       }
//       if (bouquets >= m) {
//         return true;
//       }
//     }
//     return bouquets >= m;
//   }

//   if (bloomDay.length < m * k) {
//     return -1; // Not enough flowers to make m bouquets
//   }

//   // Binary Search
//   let low = Math.min(...bloomDay);
//   let high = Math.max(...bloomDay);

//   while (low < high) {
//     const mid = Math.floor((low + high) / 2);
//     if (needFlowers(mid)) {
//       high = mid;
//     } else {
//       low = mid + 1;
//     }
//   }

//   return low;
// }

// console.log(minDays([1, 10, 3, 9, 2, 4, 45, 56, 78, 10, 2], 3, 1));

// console.log(`===============================`);
// function minDays(bloomDay, m, k) {
//   n = bloomDay.length;

//   if (n < m * k) return -1;

//   low = Math.min(...bloomDay);
//   high = Math.max(...bloomDay);
//   bd = bloomDay;
//   days = -1;

//   while (low <= high) {
//     mid = (low + high) >> 1;
//     boqCnt = 0;

//     adj = 0;
//     for (let i = 0; i < bd.length; i++) {
//       if (bd[i] <= mid) {
//         adj++;
//       } else {
//         adj = 0;
//       }

//       if (adj == k) {
//         boqCnt += 1;
//         adj = 0;
//       }
//     }

//     if (boqCnt >= m) {
//       days = mid;
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }

//   return days;
// }
