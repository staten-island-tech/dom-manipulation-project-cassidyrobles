
let count = 0;

const DOMselectors = {
  btn: document.querySelector(".btn"),
  title: document.querySelector("#title"),
  artist: document.querySelector("#artist"),
  albumCover: document.querySelector("#url"),
  display: document.querySelector(".display"),
  remove: document.querySelector(".remove"),
  displayCard: document.querySelector(".display-card"),
  removebtn: document.querySelectorAll(".removebtn"),
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
    `<div class= "display-card" id="display-card"> 
    <img class="display-img" src="${albumCover}"/>
     <h2 class="display-artist">${artist}</h2>
      <h3 class="display-album">${title}</h3> 
      <button class="removebtn">Remove Album</button> </div>`
  );

  clear();

}
DOMselectors.btn.addEventListener("click",cardThing );



//DOMselectors.removebtn= document.querySelectorAll(".removebtn");
DOMselectors.removebtn.forEach((button) =>
button.addEventListener("click", function () {
  this.parentElement.remove();
}
)
)

const removeButton = document.querySelector(".removebtn");
removeButton.addEventListener("click", (event) => {
if (event.target.tagName === "Button") {
  const button = event.target;
  const card = button.parentNode;
  const display = card.parentNode;
  if (buttin.textContent === "Remove Album") {
    display.removeChild(card);
  }
}
})





function clear(){
  let titleBox = DOMselectors.title;
  let artistBox = DOMselectors.artist;
  let albumCoverBox = DOMselectors.albumCover;
  titleBox.value= "";
  artistBox.value= "";
  albumCoverBox.value= "";
}


