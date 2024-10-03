// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`

// Windchill function
const temperature = document.getElementById("temp").textContent;
const windSpeed = document.getElementById("wind").textContent;
const windChillFactor = document.getElementById("windFactor");

function Windchill() {
    let total = 13.12 + (0.6215 * temperature) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * (temperature * (windSpeed ** 0.16)));
    return total;
}

if (temperature <= 10 && windSpeed > 4.8) {
    windChillFactor.textContent = Windchill().toFixed(1);
} else {
    windChillFactor.textContent = "N/A";
}