(function displayFullName(firstName, lastName) {
    return firstName + " " + lastName;
})("pooja", "malve");


//Write a function called createCalculator, which should return an object that has four methods, add, subtract, multiply and divide.
function createCalculator() {
    return {

        add: function(a, b) {
            return a + b;
        },
        subtract: function(a, b) {
            return a - b;
        },
        multiply: function(a, b) {
            return a * b;
        },
        divide: function(a, b) {
            return a / b;
        }
    }
}
let calc = createCalculator();
console.log(calc.add(20, 20)); // 40
concole.log(calc.subtract(2, 1)); // 0
console.log(calc.multiply(2, 2)); // 4
console.log(calc.divide(12, 2));