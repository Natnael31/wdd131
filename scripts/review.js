// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`;

// Main code

let counter = Number(localStorage.getItem('reviews'));
localStorage.setItem('reviews', ++counter);

const reviewCount = localStorage.getItem('reviews');
const reviewDisplay = document.getElementById("review");
reviewDisplay.textContent = `Number of reviews completed: ${reviewCount}`;
//   localStorage.removeItem('reviews');