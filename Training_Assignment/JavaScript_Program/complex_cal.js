function Complex(real, imaginary) {
    this.real = 0;
    this.imaginary = 0;
    this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
    this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
}
Complex.transform = function(num) {
    var complex;
    complex = (num instanceof Complex) ? num : complex;
    complex = (typeof num === 'number') ? new Complex(num, 0) : num;
    return complex;
}

function displayComplex(re, img) {
    if (img === '0 ') return '' + re;
    if (re === 0) return '' + img + 'i';
    if (img < 0) return '' + re + img + 'i';
    return '' + re + '+' + img + 'i';
}
//addition
function complex_add(first, second) {
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);

    var real = num1.real + num2.real;
    var imaginary = num1.imaginary + num2.imaginary;

    return displayComplex(real, imaginary);
}
//substraction
function complex_substract(first, second) {
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);

    var real = num1.real - num2.real;
    var imaginary = num1.imaginary - num2.imaginary;

    return displayComplex(real, imaginary);
}
//multiplication
function complex_muliply(first, second) {
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);

    var real = (num1.real * num2.real) - (num1.imaginary * num2.imaginary);
    var imaginary = (num1.real * num2.imaginary) + (num1.imaginary * num2.real);
    return displayComplex(real, imaginary);
}
//division
function complex_division(first, second) {
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);

    var denominator = num2.real * num2.real + num2.imaginary * num2.imaginary;
    var real = (num1.real * num2.real + num1.imaginary * num2.imaginary) / denominator;
    var imaginary = (num1.imaginary * num2.real - num1.real * num2.imaginary) / denominator;

    return displayComplex(real, imaginary);
}


var a = new Complex(3, -4);
var b = new Complex(5, 3);

console.log("Addition: ", complex_add(a, b));
console.log("Substraction: ", complex_substract(a, b));

var c = new Complex(2, -7);
var d = new Complex(4, 3);

console.log("Multiplication: ", complex_muliply(c, d));
//console.log("Multiplication: ", complex_muliply(a, b));

console.log("Division: ", complex_division(c, d));