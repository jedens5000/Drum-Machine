for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    // console.log("click handler " + i);
    // console.log(this.innerHTML);
    // function hitDrum() {
    if (i === 0) {
      let audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
    } else if (i === 1) {
      let audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
    } else if (i === 2) {
      let audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
    } else if (i === 3) {
      let audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
    } else if (i === 4) {
      let audio = new Audio("./sounds/snare.mp3");
      audio.play();
    } else if (i === 5) {
      let audio = new Audio("./sounds/crash.mp3");
      audio.play();
    } else {
      let audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
    }
    // audio.play();
    // }

    // hitDrum();
  }
}

// audio.play();
