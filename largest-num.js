let numbers = [5, 6, 7, 31, 100, 76, 98, 11]
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(largest);
