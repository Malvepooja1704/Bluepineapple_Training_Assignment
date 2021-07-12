function char_alphabet(ch) {
    if (ch.match(/[a-zA-Z]/)) {
        return true;
    } else {
        return false;
    }
}
console.log(char_alphabet("C"));
console.log(char_alphabet("1"));