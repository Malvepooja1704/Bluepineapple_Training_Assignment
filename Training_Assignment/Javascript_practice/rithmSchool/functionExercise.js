//write a function that will take two parameters and return differece of two parameters
function differeceOfTwo(num1, num2) {
    return num1 - num2;
}
console.log(differeceOfTwo(30, 20));
console.log(differeceOfTwo(0, 2));


//write a function that will take two parameters and return product of two parameters
function productOfTwo(num1, num2) {
    return num1 * num2;
}
console.log(productOfTwo(2, 2));
console.log(productOfTwo(2, 0));

//write a function that take one parameter(1 to 7) and return day of week
function printDay(day) {
    const day_of_week = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    };
    return day_of_week[day];
}
console.log(printDay(3));
console.log(printDay(7));

//write a function that will retunr lasst elemenet of arrays
function lastElement(arr) {
    return arr[arr.length - 1];
}
console.log(lastElement([1, 2, 3, 4]));
console.log(lastElement([]));

//write a function takes two parameters compare and return which is greater or
function numberCompare(number1, number2) {
    if (number1 > number2) {
        return "First is Greater";
    } else if (number1 < number2) {
        return "Second is Greater";
    } else {
        return "Both are Equal";
    }
}
console.log(numberCompare(1, 2));
console.log(numberCompare(1, 1));
console.log(numberCompare(2, 1));

//write a function takes tow parameters word and letter resp the function return how many times letter appears in word
function singleLetterCount(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }
    return count;
}
console.log(singleLetterCount('amazing', 'A'));
console.log(singleLetterCount('reyan', 'y'));

//write a function take string and returnans objectwith keys being the letters and value being the count of letters
function multipleLetterCount(str1) {
    let obj = {};
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] in obj) {
            obj[str1[i]]++;
        } else {
            obj[str1[i]] = 1;
        }
    }
    return obj;
}
console.log(multipleLetterCount("Hello"));
console.log(multipleLetterCount("Pooja"));

//array manipulation function
function arrayManipulation(arr, command, location, value) {
    if (command === 'remove') {
        if (location === 'end') {
            return arr.pop();
        }
        return arr.shift();
    } else if (command === 'add') {
        if (location === 'end') {
            arr.push(value);
            return arr
        }
        arr.unshift(value);
        return arr;
    }
}
console.log(arrayManipulation([1, 2, 3], "remove", "end"));
console.log(arrayManipulation([1, 2, 3], "remove", "start"));
console.log(arrayManipulation([1, 2, 3], "add", "end", 4));
console.log(arrayManipulation([1, 2, 3], "add", "start", 0));


//is palindrome function
function isPalindrome(string1) {
    return string1.toLowerCase().split('').reverse().join('') === string1.toLowerCase();
}
console.log(isPalindrome("testing"));
console.log(isPalindrome("Pooja"));
console.log(isPalindrome("mom"));
console.log(isPalindrome("abba"));