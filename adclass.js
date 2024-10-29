function addClass(arr1,arr2){
let addedclass=[];
for(let i=0;i<arr1.length;i++){
    for(let j=1;j<arr2.length;j++){
        if(arr1[i]+arr2[j]){
            addedclass++
        }
    }
}
return addedclass

}
console.log(addClass([1,2],[3,4]));

