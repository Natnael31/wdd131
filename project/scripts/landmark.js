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

ham.addEventListener('click', ()=>{
    list.classList.toggle('show');
    ham.classList.toggle('show');
})

// Array of landmarks
const landmarks = [
    {
        landmarkName: "Axum Obelisk",
        location: "Axum, Tigray",
        imageUrl: "images/640px-Aksum_obelisk.webp"
    },
    {
        landmarkName: "Lalibela Church",
        location: "Lalibela, Wello",
        imageUrl: "images/640px-Bet_Giyorgis_church_Lalibela_01_11zon.webp"
    },
    {
        landmarkName: "St. Mary of Zion Church ",
        location: "Axum, Tigray",
        imageUrl: "images/Axum_Tsion.webp"
    },
    {
        landmarkName: "Fasilides Palace",
        location: "Gondar, Amhara",
        imageUrl: "images/640px-Fasilides_Palace_01.webp"
    },
    {
        landmarkName: "Erta Ale",
        location: "Danakil Depression, Afar",
        imageUrl: "images/640px-Erta_Ale.webp"
    },
    {
        landmarkName: "Simien Mountains",
        location: "Gondar, Amhara",
        imageUrl: "images/640px-GeladaTroopSimienMountains.webp"
    }
];

const land = document.querySelector(".landmarks");
const h1 = document.getElementById("bodyHeader");
h1.textContent = "Famous Landmarks"

let deal_cards = ()=>{
landmarks.forEach((landmark) => {
    let newCard = document.createElement("div");
    newCard.innerHTML = `<h2>${landmark.landmarkName}</h2>
                            <p><span>Location:</span> ${landmark.location}</p>
                            <img src="${landmark.imageUrl}"  loading="lazy" alt="${landmark.landmarkName}">`
    land.append(newCard);
});
}

deal_cards();