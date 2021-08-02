//write a function that will rotate array right with key spaces
function rotate(arr, num) {
    var value = num % arr.length;
    for (let i = 0; i < value; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

console.log(rotate([1, 2, 3], 1));
console.log(rotate([1, 2, 3], 2));
console.log(rotate([1, 2, 3], 3));


//write a function wich take two parameters rows and columns and makeXO grid

function makeXOGrid(rows, amount) {
    var finalArr = []
    var startWithX = true
    for (var i = 0; i < rows; i++) {
        var newRow = []
        for (var j = 0; j < amount; j++) {
            if (startWithX) {
                newRow.push("X")
            } else {
                newRow.push("O")
            }
            startWithX = !startWithX
        }
        finalArr.push(newRow)
    }
    return finalArr;
}
console.log(makeXOGrid(3, 2));