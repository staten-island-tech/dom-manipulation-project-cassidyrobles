const DOMselector = {
  button: document.querySelector(".btn"),
  title: document.querySelector("#title"),
  artist: document.querySelector("#artist"),
  albumCover: document.querySelector("#url"),
  display: document.querySelector(".display"),
};

function cardThing() {
  let title = DOMSelectors.title.value;
  let artist = DOMSelectors.artist.value;
  let albumCover = DOMSelector.albumCover.value;
  DOMselector.display.insertAdjacentHTML(
    "afterend",
    `<h2>${title}</h2> <h2>${artist}</h2> <h2>${albumCover}</h2>`
  );
}

DOMSelectors.btn.addEventListener("click", cardThing);
