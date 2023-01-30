
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener(
    "click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}));


const slider = document.getElementById("slider");
const boxContainer = document.getElementById("box-container");

slider.addEventListener("input", function() {
  let n = slider.value;
  let boxes = "";
  for (let i = 0; i < n; i++) {
    let color = getRandomColor();
    boxes += `<div class="box" style="background-color: ${color}"></div>`;
  }
  boxContainer.innerHTML = boxes;
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
