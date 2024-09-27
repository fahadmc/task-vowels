// const list = [1, 2, 3, 4, 5, 1, 2, 4, 5, 3, 4, 2, 4, 1, 3];
// const duplicates = list.filter((ele, idx) => {
//     return list.indexOf(ele) === idx;
// });
// console.log(duplicates);

const list = [1,2,3,4,4];
const duplicates = [];

for (let i = 0;i<list.length; i++) {
    let element = list[i];
    if (duplicates.indexOf(element) === -1) {
        if (list.indexOf(element) !== i) {
            duplicates.push(element);
        }
    }
}

console.log(duplicates);
