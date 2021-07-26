let arr = [];
arr[0] = 'pooja'; //add first name
arr.push('malve'); //add last name at the end
console.log(arr);
arr.unshift('blue'); //add fav color at begining
console.log(arr);

arr.shift(); //remove fav color from beginning
console.log(arr);

let arr2 = [];
arr2.push(17);
arr2.push("javaScript");
console.log(arr2);
console.log(arr2.indexOf(17));
console.log(arr2.indexOf(1));


let combineArr = arr.concat(arr2);
console.log(combineArr);



let arr3 = ["JavaScript", "Python", "Ruby", "Java"]