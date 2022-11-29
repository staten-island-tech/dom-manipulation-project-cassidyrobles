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

  if (title === "" || artist === "" || albumCover === "") {
    alert("complete all fields");
    return;
  }

  DOMselectors.display.insertAdjacentHTML(
    "afterend",
    `<div class= "display-card"> 
    <img class="display-img" src="${albumCover}"/>
     <h2 class="display-artist">${artist}</h2> 
     <h3 class="display-album">${title}</h3> <button class ="remove">Remove Album</button> </div>`
  );

  clear();
  removeCard();
}

DOMselectors.btn.addEventListener("click", cardThing);

function clear() {
  let titleBox = DOMselectors.title;
  let artistBox = DOMselectors.artist;
  let albumCoverBox = DOMselectors.albumCover;
  titleBox.value = "";
  artistBox.value = "";
  albumCoverBox.value = "";
}

function removeCard() {
  let buttons = document.querySelectorAll(".remove");
  buttons.forEach((button) =>
    button.addEventListener("click", function (event) {
      event.target.parentElement.remove();
    })
  );
}
