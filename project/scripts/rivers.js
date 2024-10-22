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

// Array of rivers
const rivers = [
    {
        riverName: "Blue Nile River",
        location: "Bahir_Dar, Ethiopia",
        imageUrl:
            "images/640px-Blue_Nile_Falls-03__by_CT_Snow.webp"
    },
    {
        riverName: "Kuriftu_Awash_River",
        location: "Great Rift Valley, Awash",
        imageUrl:
            "images/kuriftu-resorts-awash-min (1).webp"
    },
    {
        riverName: "Omo River",
        location: "Konso, South Ethiopia",
        imageUrl:
            "images/Omo_river.webp"
    },
    {
        riverName: "Tekezze_River",
        location: "Tekezze, Tigray",
        imageUrl:
            "images/640px-Tekezze_gorge.webp"
    },
    {
        riverName: "Baro River",
        location: "Gambella, Western Ethiopia",
        imageUrl:
            "images/Baro_River.webp"
    },
    {
        riverName: "Gorgora Resort",
        location: "Bahir_Dar, Amhara",
        imageUrl:
            "images/gorgora.webp"
    }
];

const river_card = document.querySelector(".rivers");
const h1 = document.getElementById("bodyHeader");
h1.textContent = "Rivers and Resorts"

let deal_cards = ()=>{
rivers.forEach((river) => {
    let newCard = document.createElement("div");
    newCard.innerHTML = `<h2>${river.riverName}</h2>
                            <p><span>Location:</span> ${river.location}</p>
                            <img src="${river.imageUrl}" width="200" loading="lazy" alt="${river.riverName}">`
    river_card.append(newCard);
});
}

deal_cards();