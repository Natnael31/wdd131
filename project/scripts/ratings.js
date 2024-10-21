// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`

// header and main code

// Burger code
const ham = document.querySelector('nav');
const list = document.getElementById("navigation");

ham.addEventListener('click', () => {
    list.classList.toggle('show');
    ham.classList.toggle('show');
})


//Main code: Rating code that counts the total of each tourist sites from the local storage array and dynamically rates them 

const ratings = document.getElementById("detination_rating");
const data = JSON.parse(localStorage.getItem('dataArray'));

var totalLandmarksSelected = 0;
var totalLakesSelected = 0;
var totalRiversSelected = 0;

if (data != null) {
    for (let i = 0; i < data.length; i++) {
        totalLandmarksSelected += data[i].landmarks;
        totalLakesSelected += data[i].lakes;
        totalRiversSelected += data[i].rivers
    }

    // console.log(totalLakesSelected);
    // console.log(totalLandmarksSelected);
    // console.log(totalRiversSelected);

    function assignRatings(num1, num2, num3) {
        let landCard = document.createElement("div");
        landCard.innerHTML = `<h2>LandMarks selcted: ${totalLandmarksSelected}</h2>`

        let lakeCard = document.createElement("div");
        lakeCard.innerHTML = `<h2>Lakes selcted: ${totalLakesSelected}</h2>`

        let riverCard = document.createElement("div");
        riverCard.innerHTML = `<h2>Rivers selcted: ${totalRiversSelected}</h2>`

        ratings.append(landCard, lakeCard, riverCard)
    }

    assignRatings();

}







