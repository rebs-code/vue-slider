"use strict";

//create array with img
const images = [
  {
    title: "Lorem Ipsum 1",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    picture: "img/01.jpg",
  },
  {
    title: "Lorem Ipsum 2",
    caption: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    picture: "img/02.jpg",
  },
  {
    title: "Lorem Ipsum 3",
    caption: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    picture: "img/03.jpg",
  },
  {
    title: "Lorem Ipsum 4",
    caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    picture: "img/04.jpg",
  },
  {
    title: "Lorem Ipsum 5",
    caption: "Excepteur sint occaecat cupidatat non proident",
    picture: "img/05.jpg",
  },
];
// create container
const container = document.createElement("div");
container.classList.add("container");
// create items
const items = document.createElement("div");
items.classList.add("items");
// create thumbnail container
const thumbnails = document.createElement("div");
thumbnails.classList.add("thumbnails");
// create prev button
const prev = document.createElement("div");
prev.classList.add("prev");
// create next button
const next = document.createElement("div");
next.classList.add("next");
//append items to container
container.appendChild(items);
//append thumbnails to container
container.appendChild(thumbnails);
// append container to body
document.body.appendChild(container);
// append buttons to thumbnails div
thumbnails.appendChild(prev);
thumbnails.appendChild(next);

let currentSlide = 0; //questa è la prima immagine con indice 0 nell'array

for (let i = 0; i < images.length; i++) {
  //appendo le immagini
  const item = document.createElement("div");
  item.classList.add("item");
  if (i === currentSlide) {
    item.classList.add("active");
  }
  // appendo le immagini come background
  item.style.backgroundImage = `url(/img/0${i + 1}.jpg)`;
  item.style.backgroundSize = "cover";
  item.style.backgroundPosition = "center";
  item.style.backgroundRepeat = "no-repeat";
  // Append the item to the items container
  items.appendChild(item);
  //appendo i titoli
  const title = document.createElement("h2");
  title.textContent = images[i].title;
  item.appendChild(title);
  const caption = document.createElement("p");
  caption.textContent = images[i].caption;
  item.appendChild(caption);
  //appendo i caption
  // creo un elemento img per ogni singolo thumbnail
  const thumbnail = document.createElement("img");
  //give class opacity to all thumbnails
  thumbnail.classList.add("opacity");
  thumbnail.src = `/img/0${i + 1}.jpg`;
  thumbnail.alt = `Thumbnail ${i + 1}`;
  //remove opacity class from first thumbnail
  if (i === 0) {
    thumbnail.classList.remove("opacity");
  }
  // aggiungo un event listener per ogni thumbnail
  thumbnail.addEventListener("click", function () {
    // rimuovo la classe active dall'immagine corrente
    allItems[currentSlide].classList.remove("active");
    // cambio currentSlide con l'indice dell'immagine cliccata
    currentSlide = i;
    // aggiungo la classe active all'immagine corrente
    allItems[currentSlide].classList.add("active");
    //give class opacity to all thumbnails
    const allThumbnails = document.querySelectorAll(".thumbnails img");
    for (let i = 0; i < allThumbnails.length; i++) {
      allThumbnails[i].classList.add("opacity");
    }
    // the thumbnail with the same source image as the current slide has class opacity removed
    thumbnail.classList.remove("opacity");
  });
  thumbnails.appendChild(thumbnail);
}

// This LOC selects all the elements in the hmtl with class "item" and stores them in a variable.
const allItems = document.querySelectorAll(".item");

// add event listeners to buttons
next.addEventListener("click", function () {
  // if the current slide is not the last one, remove the class "active" from the current slide and add it to the next one.
  if (currentSlide < allItems.length - 1) {
    allItems[currentSlide].classList.remove("active");
    currentSlide++;
    allItems[currentSlide].classList.add("active");
  } // if the current slide is the last one, remove the class "active" from the current slide and add it to the first one.
  else {
    allItems[currentSlide].classList.remove("active");
    currentSlide = 0;
    allItems[currentSlide].classList.add("active");
  }
  //the thumbnail with the same source image as the current slide has class opacity removed
  const allThumbnails = document.querySelectorAll(".thumbnails img");
  for (let i = 0; i < allThumbnails.length; i++) {
    allThumbnails[i].classList.add("opacity");
  }
  allThumbnails[currentSlide].classList.remove("opacity");
});

prev.addEventListener("click", function () {
  // if the current slide is not the first one, remove the class "active" from the current slide and add it to the previous one.
  if (currentSlide > 0) {
    allItems[currentSlide].classList.remove("active");
    currentSlide--;
    allItems[currentSlide].classList.add("active");
  } else {
    // if the current slide is the first one, remove the class "active" from the current slide and add it to the last one.
    allItems[currentSlide].classList.remove("active");
    currentSlide = allItems.length - 1;
    allItems[currentSlide].classList.add("active");
  }
  //the thumbnail with the same source image as the current slide has class opacity removed
  const allThumbnails = document.querySelectorAll(".thumbnails img");
  for (let i = 0; i < allThumbnails.length; i++) {
    allThumbnails[i].classList.add("opacity");
  }
  allThumbnails[currentSlide].classList.remove("opacity");
});

//funzione di autoplay

function autoPlay() {
    // if the current slide is not the last one, remove the class "active" from the current slide and add it to the next one.
    if (currentSlide < allItems.length - 1) {
      allItems[currentSlide].classList.remove("active");
      currentSlide++;
      allItems[currentSlide].classList.add("active");
    } // if the current slide is the last one, remove the class "active" from the current slide and add it to the first one.
    else {
      allItems[currentSlide].classList.remove("active");
      currentSlide = 0;
      allItems[currentSlide].classList.add("active");
    }
    //the thumbnail with the same source image as the current slide has class opacity removed
    const allThumbnails = document.querySelectorAll(".thumbnails img");
    for (let i = 0; i < allThumbnails.length; i++) {
      allThumbnails[i].classList.add("opacity");
    }
    allThumbnails[currentSlide].classList.remove("opacity");
  };

//funzione reverse
function reversePlay() {
   // if the current slide is not the first one, remove the class "active" from the current slide and add it to the previous one.
   if (currentSlide > 0) {
    allItems[currentSlide].classList.remove("active");
    currentSlide--;
    allItems[currentSlide].classList.add("active");
  } else {
    // if the current slide is the first one, remove the class "active" from the current slide and add it to the last one.
    allItems[currentSlide].classList.remove("active");
    currentSlide = allItems.length - 1;
    allItems[currentSlide].classList.add("active");
  }
  //the thumbnail with the same source image as the current slide has class opacity removed
  const allThumbnails = document.querySelectorAll(".thumbnails img");
  for (let i = 0; i < allThumbnails.length; i++) {
    allThumbnails[i].classList.add("opacity");
  }
  allThumbnails[currentSlide].classList.remove("opacity");
}

//bottone per autoplay
const start = document.getElementById("start");
let interval;

start.addEventListener("click", function () {
  if (!interval) {
    interval = setInterval(autoPlay, 3000);
  }
});

//bottone per stoppare autoplay
const stop = document.getElementById("stop");
stop.addEventListener("click", function () {
    clearInterval(interval); 
    interval = null;
});

//bottone per reverse
const reverse = document.getElementById("reverse");
reverse.addEventListener("click", function () {
  if (!interval) {
    interval = setInterval(reversePlay, 3000);
  } 
});
