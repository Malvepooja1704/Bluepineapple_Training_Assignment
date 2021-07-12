function occurenceOfDigit(num, digit) {
    let count = 0,
        remainder;
    while (num) {
        remainder = num % 10;
        if (remainder == digit) {
            count = count + 1;
        }
        num = parseInt(num / 10);
    }
    return count;
}

num = 1231451;
digit = 1
console.log(occurenceOfDigit(num, digit));