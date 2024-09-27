const str="ieouee "
const vowels=["a","A","i","I","o","O","e","E","U","u"]
function vow(str){
    let vowelsCount=0;
    let l=str.length;
    let indx=0;
    for(i=0;i<l;i++){
     for(j=0;j<vowels.length;j++){
        if(vowels[j]==str[i]){
            vowelsCount++;
            break

        }
     }
    }
    return vowelsCount;
}
console.log(vow(str));
