//write a function that console all the even from the array
let nestedArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
    [9, 10, 11, 12]
];

function printEven() {
    for (let i = 0; i < nestedArr.length; i++) {
        for (let j = 0; j < nestedArr.length; j++) {
            if (nestedArr[i][j] % 2 == 0) {
                console.log(nestedArr[i][j]);
            }
        }
    }
}

printEven();

//write a function that will return the sum of all numbers in array
let nestedArrNum = [
    [1, 2],
    [3, 4],
    [5, 6]
];

function sumTotal() {
    let sum = 0;
    for (let i = 0; i < nestedArrNum.length; i++) {
        for (let j = 0; j < nestedArrNum[i].length; j++) {
            sum += nestedArrNum[i][j];
        }
    }
    return sum;
}
console.log(sumTotal());