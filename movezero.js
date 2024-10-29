function moveallZero(arr) {
    let correct = []
    let  idx=0
    for (let i = 0; i < arr.length; i++) {
        if( arr[i]!==0){
            correct[idx]=arr[i];
            idx++;

        }

    }
    for(let j=0;j<arr.length;j++){
        if(arr[j]==0){
            correct[idx]=arr[j];
           idx++;
            
        }
    }
    
    return correct;
}
console.log(moveallZero([2,3,4,0,5,0,8,0]));
