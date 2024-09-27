function factor(num){
    let fact=[];
    let idx=0;
    for ( i = 0;i<= num;i++) {
       if(num%i===0){
        fact[idx]=i;
        idx++;
       }
        
    }
    return fact;
}


console.log(factor(6));



