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
        lakeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        lakeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        lakeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        lakeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        lakeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        lakeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
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