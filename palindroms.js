//palindroms//
function isPalindrome(str) {
    str = str.toLowerCase();
    for (let i = 0; i < math.floor(str.length / 2); i++) {
     if(str[i]!==str[str.length-1-i]){
        return false;
     }
    }
    return true;

}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
