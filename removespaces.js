function removeSpace(str) {
    let removedstring = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            removedstring = removedstring + str[i]


        }
    }

    return removedstring;
}
console.log(removeSpace('hello w o r ld'));

