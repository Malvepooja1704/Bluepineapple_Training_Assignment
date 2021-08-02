const api = '90a3d367ee39b25219d92a4d56eba44c';
let loc = document.getElementById('location');
let tempIcon = document.getElementById('temprature-icon');
let tempValue = document.getElementById('temperature-value');
let climate = document.getElementById('climate');
let iconFile;

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');


window.addEventListener("load", () => {
    let long;
    let lat;
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            //storing latitude and longitude in variables
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const base = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

            fetch(base).then((response) => {
                    return response.json;
                })
                .then(data => {
                    const { name } = data;
                    const { feels_like } = data.main;
                    const { id, main } = data.weather[0];

                    loc.textContent = name;
                    climate.textContent = main;
                    tempValue.textContent = Math.round(feels_like - 273);


                })
        });
    }
});