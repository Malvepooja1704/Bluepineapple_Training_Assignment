//const lodash = require('lodash');
const arr = [11, 2, [3, 4, [55, 66], 43, 76, [62]], 10];
const _name = ['piya', 'siya', ['ram', 'sham', ['jay'],
    ['rey'], 'shiv',
]];
const flattenList = arr.flat(Infinity)
console.log(flattenList);

const flattenName = _name.flat(Infinity)
console.log(flattenName);

//using recursion
function flattenArr(arr) {
    return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flattenArr(curr) : curr), []);
};
const flatten = flattenArr(arr);
console.log(flatten);