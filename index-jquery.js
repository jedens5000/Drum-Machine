// const drums = document.querySelectorAll(".drum");
const drums = $(".drum");

$("body").css("background-color", "yellow");

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
    switch (buttonInnerHTML) {
      case "w":
        let tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        let tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        let tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        let tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        let snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        let crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        let bass = new Audio("./sounds/bass.mp3");
        bass.play();
        break;

      default:
        console.log(buttonInnerHTML);
        break;
    }
  });
}

document.addEventListener("keydown", typeDrum);

function typeDrum(key) {
  switch (key.key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let bass = new Audio("./sounds/bass.mp3");
      bass.play();
      break;

    default:
      console.log(key.key);
      break;
  }
}
