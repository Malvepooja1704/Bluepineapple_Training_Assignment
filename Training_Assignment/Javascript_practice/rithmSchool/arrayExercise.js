let people = ["Greg", "Mary", "Devon", "James"];

for (let name = 0; name < people.length; name++) {
    console.log(people[name]); //iterate through array
}
console.log(people.shift()); //remove first name
console.log(people.pop()); //remove last name
people.unshift("Matt"); //add elemet to start of array
people.push('Pooja'); //add element to end of array
console.log(people);

for (let name = 0; name < people.length; name++) {
    if (people[name] === 'Mary') {
        break; //iterate through rray till Mary after come mary break
    } else {
        console.log(people[name]);
    }
}

console.log(people.slice(2)); //  make a copy using slice and the copy should not contain matt or mary
console.log(people.indexOf('Mary')); //return index of mary
console.log(people.indexOf('Foo')); //return index of foo


people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, 'Elizabeth', 'Artie'); //remove Devon and add Elizabeth and Artie
console.log(people);

let withBob = people.concat('Bob'); //creat new var and concat bob
console.log(withBob);