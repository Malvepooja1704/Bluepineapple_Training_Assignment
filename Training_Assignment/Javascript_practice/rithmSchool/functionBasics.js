//create a function that will return your full name
function myName() {
    let myName = 'Pooja Malve';
    return myName;
}
console.log(myName());


//create an array and access random element using math.random()
let favouriteFood = ['Pizza', 'ice cream'];

function randomFood() {
    let randomFoodIndex = Math.floor(Math.random() * favouriteFood.length);
    console.log(favouriteFood[randomFoodIndex]);
}
randomFood();

//create an array of numbers and iterate through it to dispplay odd numberStr
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayOddNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        }
    }
}
displayOddNumbers();

//create an array of numbersand return first odd number
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayFirstOddNumbers() {
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 !== 0) {
            return number[i];
        }
    }
}
let firstOddNumber = displayFirstOddNumbers();
console.log(firstOddNumber);

//create an array of numbers andwrite a function that will return first even number
let numberEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayFirstEvenNumbers() {
    for (let i = 0; i < numberEven.length; i++) {
        if (numberEven[i] % 2 === 0) {
            return numberEven[i];
        }
    }
}
let firstEvenNumber = displayFirstEvenNumbers();
console.log(firstEvenNumber);

//create a function that will return first half of array
let numberFirst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayFirstHalf() {
    return numberFirst.slice(0, numberFirst.length / 2);
}
console.log(displayFirstHalf());


//create a function that will return second half of array
let numberSecond = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displaySecondHalf() {
    return numberSecond.slice(numberFirst.length / 2);
}
console.log(displaySecondHalf());