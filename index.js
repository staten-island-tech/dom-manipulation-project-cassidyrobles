const DOMselectors = {
  btn: document.querySelector(".btn"),
  title: document.querySelector("#title"),
  artist: document.querySelector("#artist"),
  albumCover: document.querySelector("#url"),
  display: document.querySelector(".display"),
  remove: document.querySelector(".remove"),
  displayCard: document.querySelector(".display-card"),
};

function cardThing() {
  let title = DOMselectors.title.value;
  let artist = DOMselectors.artist.value;
  let albumCover = DOMselectors.albumCover.value;
  console.log(title);
  console.log(artist);
  console.log(albumCover);
  DOMselectors.display.insertAdjacentHTML(
    "afterend", 
    `<div class="display-card"> <img class="display-img" src="${albumCover}"/> <h2 class="display-artist">${artist}</h2> <h3 class="display-album">${title}</h3> <button class="remove">Remove Album</button> </div>`
  );
}

DOMselectors.btn.addEventListener("click", cardThing);
DOMselectors.remove.addEventListener("click", removeCardThing);

function removeCardThing(){
let cardHTML = DOMselectors.displayCard;
cardHTML.remove();
}
