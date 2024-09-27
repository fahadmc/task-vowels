//filter method using


// function duplicates(src){
//     const duplicates = src.filter((ele, idx) => {
//         return src.indexOf(ele) !== idx;
// });
        
// return duplicates;

    
// };
// const str=[1,2,3,4,2,4,2]
// console.log( duplicates(str));






// // loop method using 
const arr=[1,2,3,4,5,5,3,2]
function removeduplicate(arr){
    const original=[];
    let l=arr.length;
    indx=0;
    for(let i=0;i<l;i++){
        let isexist=false;
        for(j=0;j<original.length;j++){
            if(arr[i]==original[j]){
                isexist=true;
            }
        }

    }
    return original;
}

console.log(removeduplicate(arr));











