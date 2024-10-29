function missingnumber(arr){
    let largest=arr[0];
    let smallest =arr[0]
    let sum=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
            
        }else if (
            arr[i]<smallest){
                smallest=arr[i]
            }
            sum += arr[i];
    }

    let expectedSum = 0;
    for (let i = smallest; i <= largest; i++) {
        expectedSum += i;
    }
return expectedSum-sum;
}
console.log(missingnumber([1,3,4,5]));

//  function removeDup(nums) {
//     let temp=[]
//     let indx=0
//     let k=nums.length
//     for(i=0;i<k;i++){
//         if(nums[i]!==nums[i+1]){
//             temp[indx]=nums[i]
//             j++
//         }
//     }
//  return temp
// };
// console.log([1,1,2]);
