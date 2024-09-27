// merge two sorted array.//

const arr1 = [1, 7, 5]
const arr2 = [2, 4, 6]
function sortedarray(arr1, arr2) {
    let mergedArray = [];
    let indx = 0;
    //merged loop methord
    for (i = 0; i < arr1.length; i++) {
        mergedArray[indx] = arr1[i]
        indx++;
    }
    for (j = 0; j < arr2.length; j++) {
        mergedArray[indx] = arr2[j]
        indx++
    }
    //sorted loop methord
    for (d = 0; d < mergedArray.length; d++) {
        for (s = d+1; s < mergedArray.length; s++){
            if(mergedArray[d]>mergedArray[s]){
                let temp=mergedArray[d]
                mergedArray[d]=mergedArray[s]
                mergedArray[s]=temp
                
            }
        }


    }
    return mergedArray;
}
console.log(sortedarray(arr1, arr2));
