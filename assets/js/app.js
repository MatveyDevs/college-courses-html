const burger = document.querySelector(".burger-menu");
const body = document.querySelector("body");
const nav = document.querySelector("nav");

burger.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("burger-close");
  body.classList.toggle("overflow");
  nav.classList.toggle("visible");
});

function functia() {
  let box = document.querySelector(".box-js");
  if (box.style.rotate === "0deg") {
    box.style.backgroundColor = "#842424";
    box.style.rotate = "-45deg";
    box.style.width = "350px";
    box.style.height = "350px";
    box.style.marginTop = "152px";
    box.style.marginBottom = "152px";
  } else {
    box.style.backgroundColor = "#D9D9D9";
    box.style.rotate = "0deg";
    box.style.width = "150px";
    box.style.height = "150px";
    box.style.marginTop = "252px";
    box.style.marginBottom = "252px";
  }
}
