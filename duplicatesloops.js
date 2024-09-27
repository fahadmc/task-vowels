
//original printing

// const list = [1,2,3,4,5,6,7,1,2,3,4];
// const duplicates = [];

// for (let i = 0;i<list.length; i++) {
//     let element = list[i];
//     if (duplicates.indexOf(element) == -1) {
//         if (list.indexOf(element) === i) {
//             duplicates.push(element);
//         }
//     }
// }

// console.log(duplicates);


// duplicate printing

// const list = [1,2,3,4,5,6,7,1,1,1,1,1,1,2,3,4];
// const duplicates = [];

// for (let i = 0;i<list.length; i++) {
//     let element = list[i];
//     if (duplicates.indexOf(element) === -1) {
//         if (list.indexOf(element) !== i) {
//             duplicates.push(element);
//         }
//     }
// }

// console.log(duplicates);


//loop duplicates


const arr=[1,2,3,3,4,4]
function duplicate(arr){
    const duplicates=[];
    let l=arr.length;
    let idx=0;
 for(let i=0;i<l;i++){
    let isexist=false;
    for(let j=0;j<duplicates.length;j++){
        if(arr[i] ==duplicates[j]){
            isexist=true;

        }
    }
  if(isexist){
    continue
  }
  for(let d=i+1;d<l;d++){
    if(arr[i]==arr[d]){
        duplicates[idx]=arr[i]
        idx++
        break
    }
  }
 }
 return duplicates
}
console.log(duplicate(arr));










