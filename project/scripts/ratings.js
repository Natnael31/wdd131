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

    function assignRatings() {
        const value1 = { label: "Landmarks Selected", value: totalLandmarksSelected };
        const value2 = { label: "Lakes Selected", value: totalLakesSelected };
        const value3 = { label: "Rivers Selected", value: totalRiversSelected };

        let values = [value1, value2, value3];

        values.sort((a, b) => b.value - a.value);

        const first = values[0];
        const second = values[1];
        const last = values[2];

        if (first.value != 0 || second.value != 0 || last.value != 0) {
            let ratingCard = document.createElement("div");
            ratingCard.innerHTML = `<h2>${first.label}: ${first.value} ⭐⭐⭐⭐⭐</h2><br/>
                              <h2>${second.label}: ${second.value} ⭐⭐⭐⭐</h2><br/>
                              <h2>${last.label}: ${last.value} ⭐⭐⭐</h2><br/>`
            ratings.append(ratingCard)
        }
    }

    assignRatings();
}









