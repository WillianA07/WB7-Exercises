
"use strict"

let cities = [
    {
        name: "Queens, NY",
        latitude: 40.741751,
        longitude: -73.904222,
    },
    {
        name: "New York, NY",
        latitude: 40.747000,
        longitude: -73.996989,
    },
    {
        name: "Philadelphia, PA",
        latitude: 39.953028,
        longitude: -75.160199,
    },
    {
        name: "Charlotte, NC",
        latitude: 35.225255,
        longitude: -80.825238,
    },
    {
        name: "Tampa, FL",
        latitude: 27.979832,
        longitude: -82.441246,
    },
];

const cityDpD = document.getElementById("cityDpD");
const resultTbl = document.getElementById("resultTbl");
const tblBody = document.getElementById("tblBody");

window.onload = function() {
    addOptToSelect();
    document.getElementById("cityDpD").onchange = findStation;
}

function addOptToSelect () {
    let defaultOpt = document.createElement("option");
    defaultOpt.textContent = "Please Select a City";
    defaultOpt.value = "";
    cityDpD.appendChild(defaultOpt);

    for (let x of cities) {
        let opt = document.createElement("option");
        opt.textContent = x.name;
        opt.value = x.name;
        cityDpD.appendChild(opt);
    }
}

function findStation() {
    for (let x of cities) {
        if (x.name == cityDpD.value) {
            fetch("https://api.weather.gov/points/" + x.latitude + "," + x.longitude)
                .then(response => response.json())
                .then(y => {
                    let forecastURL = y.properties.forecast;
                    getWeather(forecastURL);
                });
        }
        // else if (cityDpD.value == "") {
        //     resultTbl.innerHTML = "";
        // }
    }
}

function getWeather (forecastURL) {
    fetch(forecastURL)
        .then(q => q.json())
        .then(z => {
            let weather = z.properties.periods
            for(let i = 0; i < weather.length; i++){
                createTblBody(weather[i]);
            }
        });
}

function createTblBody (weather) {
    let row = tblBody.insertRow();
    let c1 = row.insertCell(0);
    c1.innerHTML = weather.name;

    let c2 = row.insertCell(1);
    c2.innerHTML = weather.temperature + " " + weather.temperatureUnit;

    let c3 = row.insertCell(2);
    c3.innerHTML = "Towards " + weather.windDirection + " at " + weather.windSpeed;

    let c4 = row.insertCell(3);
    c4.innerHTML = weather.shortForecast;

    let c5 = row.insertCell(4);
    c5.innerHTML = weather.detailedForecast;
}

function clearTable () {

}