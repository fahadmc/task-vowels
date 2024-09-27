//factorial of a number//


const num=7;
function factorial(number){
let fac=1;
for(let i=1;i<=number;i++){
    fac*=i;
}
return fac;
}
console.log(factorial(num));



