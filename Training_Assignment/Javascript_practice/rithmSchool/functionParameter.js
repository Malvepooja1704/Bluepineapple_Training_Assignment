//create function add, subtract, multiply, divideit it should return addition ,substraction,division,multiplication of two numbers should

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
console.log(add(5, 6));
console.log(subtract(2, 2));
console.log(multiply(4, 3));
console.log(divide(8, 4));

//write a function that will take string parameter if parameter is firstName it should return hello boss and if parameter is other name it should return hello+that name
let firstName = 'Pooja';

function sayHello(str) {
    if (str === firstName) {
        return "Hello Boss";
    }
    return "Hello " + str;
}
console.log(sayHello("Riya"));
console.log(sayHello("Pooja"));
console.log(sayHello("Ram"));

//write a function that will accept and array and return average of numbers
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(average([1, 2, 3, 4, 5]));
console.log(average([1, 2, 3, 4, 5, 6]));
console.log(average([10, 20]));

//write a function that will returnan object of first name and last name
function createStudent(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}
console.log(createStudent("pooja", "malve"));
console.log(createStudent("riya", "sharma"));

//using createStudent function create three students and save them in each variable then create a student variale that wil store your htree sudents
let tim = createStudent("Tim", "Garcia");
let matt = createStudent("Matt", "Lane");
let elie = createStudent("Elie", "Schoppik");

let students = [tim, matt, elie];

function findStudentByFirstName(firstName) {
    let lowerCaseName = firstName.toLowerCase();
    for (let i = 0; i < students.length; i++) {
        if (students[i].firstName.toLowerCase() === lowerCaseName) {
            return true;
        }
    }
    return false;
}
console.log(findStudentByFirstName('elie'));
console.log(findStudentByFirstName('Elie'));
console.log(findStudentByFirstName('Janey'));
console.log(findStudentByFirstName('janey'));
console.log(findStudentByFirstName('TIM'));
console.log(findStudentByFirstName('MMMaaTTTtttTTT '));


/*Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate 
over the array and return a new array with every 3rd element in the array passed to the function.
 */

function extractEveryThird(array) {
    let newArray = [];
    for (let i = 2; i < array.length; i += 3) {
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(extractEveryThird([11, 22, 33, 44, 55]));
console.log(extractEveryThird(['ram', 'sham', 'jay', 'amar']));
console.log(extractEveryThird([1, 2, 3, 4, 5, 6]));

//write a function that will accepthe array and should return object with count of odd and even elements
function countOddAndEven(arr1) {
    let countObj = {
        oddCount: 0,
        evenCount: 0
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 === 0) {
            countObj.evenCount++;
        } else {
            countObj.oddCount++;
        }
    }
    return countObj;
}
console.log(countOddAndEven([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(countOddAndEven([11, 22, 1, 33, 44, 55, 8]));

//what is output of below code
let mylet = "Hello from global";

function scopePractice() {
    let mylet = "Hello from function scope";
}

scopePractice();
console.log(mylet);

let tricky = "Hello from global";

function trickyScopePractice() {
    tricky = "Hello from function scope";
}

console.log(tricky);


//wrte a function which accept a string and return a new string with only capital letters
function onlyCapitalLetters(str1) {
    let newStr = '';
    for (let i = 0; i < str1.length; i++) {
        if (str1[i].charCodeAt(0) < 91 && str1[i].charCodeAt(0) > 64) {
            newStr += str1[i];

        }
    }
    return newStr;
}
console.log(onlyCapitalLetters('HeyyaaAman'));
console.log(onlyCapitalLetters('amaZing'));
console.log(onlyCapitalLetters('RAYAN'));