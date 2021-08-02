let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};
//display all the citiesLivedIn
function displayCities() {
    let cityName = instructorData.additionalData.moreDetails.citiesLivedIn;
    for (let i = 0; i < cityName.length; i++) {
        console.log(cityName[i]);
    }
}
displayCities();

//write a function to display all the values inside hometown
function displayHomeTown() {
    let homeTownObj = instructorData.additionalData.moreDetails.hometown;
    for (let obj in homeTownObj) {
        console.log(homeTownObj[obj]);
    }
}
displayHomeTown();

//write a function addDetail with two paramkey and value and the key value to more details

function addDetails(key, value) {
    let detailObj = instructorData.additionalData.moreDetails;
    detailObj[key] = value;
    return detailObj;
}
console.log(addDetails("isHilarious", true));
console.log(addDetails("previousApartments", ["Mission", "North Beach", "Nob Hill"]));

//write a function to remove details for given key
function removeDetails(key) {
    let detailsObj = instructorData.additionalData.moreDetails;
    let valueToRemove = detailsObj[key];
    delete detailsObj[key];
    return detailsObj;
}
console.log(removeDetails("citiesLivedIn"));
console.log(removeDetails("hometown"));
console.log(removeDetails("favoriteBasketballTeam"));