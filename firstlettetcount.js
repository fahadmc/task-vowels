function firstnonrepeat(word){
let charcount={};
for(let i=0;i<word.length;i++){
    let char=word[i];
    if(charcount[char]){
        charcount[char]++;
    }else{
        charcount[char]=1;
    }
} 
for(let j=0;j<word.length;j++){
    if(charcount[word[j]]===1){
        return word[j]
    }
}
return charcount;


}
console.log(firstnonrepeat("hello world"));  

  
    



