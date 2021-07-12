const double = (num) => {
    if (num < 1 || num > 64) {
        console.log("Square must be between 1 to 64");
    }
    return BigInt(2 ** (num - 1));
}
const total = () => {
    let count = BigInt(0);
    for (let i = 1; i < 65; i++) {
        count += double(i);
    }
    return count;
}
console.log("Total:", total());