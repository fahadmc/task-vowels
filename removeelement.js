
//remove duplicate then return array sum//

// function removeElements(arr,target){
//     let removeelem=0;
//     for(let i=0;i<arr.length;i++){
//         if (arr[i] !=target){
//             removeelem=removeelem+arr[i]
//         }
//     }
//     return removeelem;
// }




function removeElements(arr,target){
    let removeelem=[];
    let indx=0;
    for(let i=0;i<arr.length;i++){
    if (arr[i] !== target){
    removeelem[indx]=arr[i]
    indx++
        }
    }
    return removeelem;
}
console.log(removeElements([0,1,2,2,3,0,4,2],2));






