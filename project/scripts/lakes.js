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

// Array of lakes
const lakes = [
    {
        lakeName: "Tana Lake and Resort",
        location: "Bahir_Dar, Amhara",
        imageUrl: "images/Tana.303f00c.webp"
    },
    {
        lakeName: "Awassa Lake",
        location: "Awassa, South Ethiopia",
        imageUrl: "images/Sunset_over_Lake_Awassa,_Ethiopia.webp"
    },
    {
        lakeName: "Chamo Lake",
        location: "Arba_Minch, South Ethiopia",
        imageUrl: "images/640px-Lake_Chamo_01.webp"
    },
    {
        lakeName: "Wenchi Crator Lake",
        location: "Wenchi, Oromia",
        imageUrl: "images/Wenchi_crator_lake.webp"
    },
    {
        lakeName: "Lake Abaya",
        location: "Arba_Minch, South Ethiopia",
        imageUrl: "images/640px-Lake_Abaya,_Arba_Minch_(6194081486).webp"
    },
    {
        lakeName: "Bishoftu kuriftu Lodge",
        location: "Bishoftu, Oromia",
        imageUrl: "images/WaterparkBishoftu.webp"
    }
    
];

const lake_card = document.querySelector(".lakes");
const h1 = document.getElementById("bodyHeader");
h1.textContent = "Lakes and Hotels"

let deal_cards = ()=>{
lakes.forEach((lake) => {
    let newCard = document.createElement("div");
    newCard.innerHTML = `<h2>${lake.lakeName}</h2>
                            <p><span>Location:</span> ${lake.location}</p>
                            <img src="${lake.imageUrl}" width="200" loading="lazy" alt="${lake.lakeName}">`
    lake_card.append(newCard);
});
}

deal_cards();