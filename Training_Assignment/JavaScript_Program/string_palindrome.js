function isPalindrome(str) {
    if (str == str.split('').reverse().join('')) {
        return (str + " is a palindrome");
    } else {
        return (str + " is not a palindrome");
    }
}
console.log(isPalindrome("abba"));
console.log(isPalindrome("malayalam"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("ab"));