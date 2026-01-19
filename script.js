let img = document.querySelector(".change-img");
let btn = document.querySelector(".btn");
let bg = document.querySelector("body");
let heading = document.querySelector("h1");
let isOn = false;

btn.addEventListener("click", () => {
  isOn = !isOn;
  if (isOn) {
    img.src = "./img/light-bulb-on.png";
    btn.textContent = "Off";
    bg.style.backgroundColor = "black";
    heading.style.color = "white";
  } else {
    img.src = "./img/light-bulb-off.png";
    btn.textContent = "On";
    bg.style.backgroundColor = "#e0e0e0";
    heading.style.color = "black";
  }
});
