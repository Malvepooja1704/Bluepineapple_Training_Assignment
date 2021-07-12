var _number = [22, 43, 6, 89, 74, 37, 0, 58];
var _name = ["Riya", "Arav", "Siya", "Jay", "Zain", "Ken"];

_number.sort(function(a, b) {
    return a - b;
});
console.log("Ascendind order: " + _number);
_number.sort(function(a, b) {
    return b - a;
});
console.log("Descending Order: " + _number);


_name.sort((first, second) => {
    if (first < second)
        return -1;
});

console.log("Ascending Name: " + _name);

_name.sort((first, second) => {
    if (first > second)
        return -1;
});

console.log("Descending Name: " + _name)