// const secondLarge = (arr) => {
//   l = arr.length;
//   if (l < 2) {
//     return null;
//   }
//   let largest = arr[0];
//   let secondLargest = arr[0];
//   for (i = 0; i < l; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] < largest) {
//       secondLargest = arr[i];
//     }
//   }

//   return secondLargest;
// };
// console.log(secondLarge([2,3,4,5,6]));


function twoSum(nums,target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j];
          }
      }
  }

  return [];
}




console.log(twoSum([2,7,11,15],9));
