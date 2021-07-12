function is_Prime(number) {
    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else {
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}
console.log(is_Prime(11));
console.log(is_Prime(4));