function countOccurence(arr,target){
    let count=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
           count++;
        }
    }
    return count;


}
console.log(countOccurence(["apple","orange","grape","banana","apple"],"apple"));
