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


//Main code: Registration code that saves customer information and chosen tourist sites in local storage


const submit = document.getElementById("submit_registration");
const landmarks = document.getElementById("choice_1");
const lakes = document.getElementById("choice_2");
const rivers = document.getElementById("choice_3");


let register = (e) => {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phoneNo = document.getElementById("phone_no").value;
    var landmarksCount = 0;
    var lakesCount = 0;
    var riversCount = 0;

    if (landmarks.checked) {
        landmarksCount += 1;
    } else if (lakes.checked) {
        lakesCount += 1
    } else if (rivers.checked) {
        riversCount += 1;
    }
    const data = { name: name, email: email, phoneNo: phoneNo, landmarks: landmarksCount, lakes: lakesCount, rivers: riversCount };

    let storeData = JSON.parse(localStorage.getItem('dataArray')) || [];
    storeData.push(data);

    localStorage.setItem('dataArray', JSON.stringify(storeData));
    // localStorage.removeItem('dataArray');
    alert("Thank you, you have registered successfully!");
}



submit.addEventListener("submit", register);

