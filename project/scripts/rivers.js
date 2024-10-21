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
        riverName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        riverName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        riverName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        riverName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        riverName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        riverName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
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