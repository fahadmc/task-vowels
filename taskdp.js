function duplicates(src){
    const duplicates = src.filter((ele, idx) => {
        return src.indexOf(ele) !== idx;
});
        
return duplicates;

    
};
const str=[1,2,3,4,2,4,2]
console.log( duplicates(str));

