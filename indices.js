function indices(arr, target) {
    let indices = [];
    idx = 0
    for (i = 0; i < arr.length; i++) {
        for(j=0;j<=arr.length;j++){
            if (arr[i] + arr[j] === target) {
               indices[idx]=i;
               idx++;
               indices[idx]=j;
               return indices;

            }
        }
    }
    
}
console.log(indices([1, 2, 3, 4, 5], 5));
