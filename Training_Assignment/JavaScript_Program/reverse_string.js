var newString = "";

function reverseString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString("Hello World!");
console.log(newString);

//reverse string with split reverse join method
function revString(str) {
    splitStr = str.split(""); //split the string into array

    revStr = splitStr.reverse(); //reverse the Array

    joinArr = revStr.join("");

    return joinArr;
}

revString("Hey This Is Me!");
console.log(joinArr);