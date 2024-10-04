function number(arr){
    let even=0;
    let odd=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            even++;
        }else{
            odd++;
        }
        }

    return ({odd,even});
}

console.log(number([1,2,3,4,5,6,7]));




