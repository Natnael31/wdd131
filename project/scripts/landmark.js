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
        landmarkName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        landmarkName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        landmarkName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        landmarkName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        landmarkName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        landmarkName: "Aba Nigeria",
        location: "Aba, Nigeria",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
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
                            <img src="${landmark.imageUrl}" width="200" loading="lazy" alt="${landmark.landmarkName}">`
    land.append(newCard);
});
}

deal_cards();