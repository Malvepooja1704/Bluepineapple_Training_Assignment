const digit = (num, count = 0) => {
    if (num) {
        return digit(Math.floor(num / 10), ++count);
    };
    return count;
};
console.log(digit(123456));
console.log(digit(123456789));
console.log(digit(1234));


//another approach
function getLength(num) {
    return num.toString().length;
}
console.log(getLength(1112233445));
console.log(getLength(457412));