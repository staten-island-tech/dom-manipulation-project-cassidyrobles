
let count = 0;

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
  
if(
  title === "" || artist === "" || albumCover === ""
){
  alert("complete all fields");
  return;
}

  DOMselectors.display.insertAdjacentHTML(
    "afterend", 
    `<div class= "display-card" id="display-card-${count}"> <img class="display-img" src="${albumCover}"/> <h2 class="display-artist">${artist}</h2> <h3 class="display-album">${title}</h3> <button id="btn-${count}">Remove Album</button> </div>`
  );
  document.querySelector(`#btn-${count}`).addEventListener("click", removeCardThing);
  clear();

  count= count +1;
}

DOMselectors.btn.addEventListener("click", cardThing);


function removeCardThing(event){
let btn = event.target;
let counter = btn.id.substring(4);
document.querySelector(`#display-card-${counter}`).remove();
}

function clear(){
  let titleBox = DOMselectors.title;
  let artistBox = DOMselectors.artist;
  let albumCoverBox = DOMselectors.albumCover;
  titleBox.value= "";
  artistBox.value= "";
  albumCoverBox.value= "";
}


