let nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [2, 3, 5, 7, 11],
            fibonnaci: [1, 1, 2, 3, 5, 8, 13]
        },
        addSnack: function(snack) {
            this.snacks.push(snack);
            return this;
        }
    }
}

//using for loop console.log primenumber array;

let primeNumber = nestedData.innerData.numberData.primeNumbers;
for (let i = 0; i < primeNumber.length; i++) {
    console.log(primeNumber[i]);
}

//console all the fibonacci numbers
let fibonacciNum = nestedData.innerData.numberData.fibonnaci;
for (let i = 0; i < fibonacciNum.length; i++) {
    console.log(fibonacciNum[i]);
}

//console "second" from order array

let value = nestedData.innerData.order;
console.log(value[1]);

//invoke addsnacks function and add snack "chocolate"

console.log(nestedData.innerData.addSnack("Chocolate"));


//Netsed Object
let nestedObject = {
    speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
    data: {
        continents: {
            europe: {
                countries: {
                    switzerland: {
                        capital: "Bern",
                        population: 8000000
                    }
                }
            }
        },
        languages: {
            spanish: {
                hello: "Hola"
            },
            french: {
                hello: "Bonjour"
            }
        }
    }
}

//write a function to add speakerswith key and value of your choices
function addSpeaker(speakerName) {
    nestedObject.speakers.push({ name: speakerName })
}
addSpeaker("Riya");
console.log(nestedObject);

//write a function to addlanguage objects
function addLanguage(language, HelloInLanguage) {
    nestedObject.data.languages[language] = { hello: HelloInLanguage }
}
addLanguage("Latin", "Salve");
console.log(nestedObject);

//addCountry that adds european country to countries
function addCountry(name, capital, population) {
    nestedObject.data.continents.europe.countries[name] = { capital: capital, population: population }
}
addCountry("India", "Delhi", 1320000);
console.log(nestedObject);