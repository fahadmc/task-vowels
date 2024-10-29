function primeNumber(num){
if(num<=1){
    return false
}
for(let i=2;i<num;i++)
    if(num%i===0){
      return false
       
    }else {
        num%i!=0
        return true
    }

   return true;
}
console.log(primeNumber(1));
