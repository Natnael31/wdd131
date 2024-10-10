// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`

// Burger code
const ham = document.querySelector('nav');
const list = document.getElementById("navigation");

ham.addEventListener('click', () => {
    list.classList.toggle('show');
    ham.classList.toggle('show');
})

// Main header code

// Array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Regina Saskatchewan Temple",
        location: "Wascana, North Regina, Canada",
        dedicated: "1999, November, 14",
        area: 990,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/regina-saskatchewan/400x250/regina-saskatchewan-temple-lds-1027644-wallpaper.jpg"
    },
    {
        templeName: "St-George-Temple",
        location: "Utah, USA",
        dedicated: "1877, April, 6", 
        area: 13375.2,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-758796-wallpaper.jpg"
    },
    {
        templeName: "Boise-Idaho",
        location: "Idaho, USA",
        dedicated: "1984, May , 25", 
        area: 3332.2,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/400x250/1-Boise-Idaho-Temple-1968984.jpg"
    },
];

const home = document.getElementById("home");
const old = document.getElementById("old");
const newer = document.getElementById("new");
const large = document.getElementById("large");
const small = document.getElementById("small")
const header = document.getElementById("bodyHeader");

const mySec = document.querySelector('.temples');

temples.forEach((temple) => {
    let newCard = document.createElement("div");
    newCard.innerHTML = `<h2>${temple.templeName}</h2>
                            <p><span>Location:</span> ${temple.location}</p>
                            <p><span>Dedicated:</span> ${temple.dedicated}</p>
                            <img src="${temple.imageUrl}" width="200" loading="lazy" alt="${temple.templeName}">`
    newCard.classList.add("temp")
    mySec.append(newCard);
});


home.addEventListener('click', () => {
    header.textContent = "Home"
    let tempCard = document.querySelectorAll('.temp');
    tempCard.forEach(element => {
        element.remove();
    });
    temples.forEach((temple) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `<h2>${temple.templeName}</h2>
                            <p> <span>Location:</span> ${temple.location}</p>
                            <p><span>Dedicated:</span> ${temple.dedicated}</p>
                            <img src="${temple.imageUrl}" width="200" loading="lazy" alt="${temple.templeName}">`
        newCard.classList.add("temp");
        mySec.append(newCard);
    })
});

old.addEventListener('click', () => {
    header.textContent = "Old"
    let tempCard = document.querySelectorAll('.temp');
    tempCard.forEach(element => {
        element.remove();
    });
    temples.forEach((temple) => {
        let date = temple.dedicated.slice(0, 4);
        if (date < 2000) {
            let newCard = document.createElement("div");
            newCard.innerHTML = `<h2>${temple.templeName}</h2>
                                        <p><span>Location:</span> ${temple.location}</p>
                                        <p><span>Dedicated:</span> ${temple.dedicated}</p>
                                        <img src="${temple.imageUrl}" width="200" loading="lazy" alt="${temple.templeName}">`
            newCard.classList.add("temp");
            mySec.append(newCard);
        }
    })
});



newer.addEventListener('click', () => {
    header.textContent = "New"
    let tempCard = document.querySelectorAll('.temp');
    tempCard.forEach(element => {
        element.remove();
    });
    temples.forEach((temple) => {
        let date = temple.dedicated.slice(0, 4);
        if (date >= 2000) {
            let newCard = document.createElement("div");
            newCard.innerHTML = `<h2>${temple.templeName}</h2>
                                        <p><span>Location:</span> ${temple.location}</p>
                                        <p><span>Dedicated:</span> ${temple.dedicated}</p>
                                        <img src="${temple.imageUrl}" width="200" loading="lazy" alt="${temple.templeName}">`
            newCard.classList.add("temp");
            mySec.append(newCard);
        }
    })
});

large.addEventListener('click', () => {
    header.textContent = "Large"
    let tempCard = document.querySelectorAll('.temp');
    tempCard.forEach(element => {
        element.remove();
    });
    temples.forEach((temple) => {
        let area = temple.area;
        if (area > 50000) {
            let newCard = document.createElement("div");
            newCard.innerHTML = `<h2>${temple.templeName}</h2>
                                        <p><span>Location:</span> ${temple.location}</p>
                                        <p><span>Dedicated:</span> ${temple.dedicated}</p>
                                        <img src="${temple.imageUrl}" width="200" loading="lazy" alt="${temple.templeName}">`
            newCard.classList.add("temp");
            mySec.append(newCard);
        }
    })
});

small.addEventListener('click', () => {
    header.textContent = "Small"
    let tempCard = document.querySelectorAll('.temp');
    tempCard.forEach(element => {
        element.remove();
    });
    temples.forEach((temple) => {
        let area = temple.area;
        if (area <= 50000) {
            let newCard = document.createElement("div");
            newCard.innerHTML = `<h2>${temple.templeName}</h2>
                                        <p><span>Location:</span> ${temple.location}</p>
                                        <p><span>Dedicated:</span> ${temple.dedicated}</p>
                                        <img src="${temple.imageUrl}" width="200" loading="lazy" alt="${temple.templeName}">`
            newCard.classList.add("temp");
            mySec.append(newCard);
        }
    })
});
