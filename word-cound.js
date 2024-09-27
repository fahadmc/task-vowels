//word counting method//

const str = "this is the new word in this case";
function countwords() {
  let count = 0;
  let inword = false;
  let l = str.length;
  for (let i = 0; i < l; i++) {

    if (str[i] !== " " && !inword) {

      count++;
      inword = true;
    }
    else if (str[i] == " ") {
      inword = false;
    }

  }
  return count;
}


console.log(countwords(str));


