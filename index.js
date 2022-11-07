const DOMselectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  point: document.querySelector(".point"),
  box: document.getElementById("big-black-box"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "this is now a big red box";
}

backgroundAndText(DOMselectors.box, DOMselectors.text);
