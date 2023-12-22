let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

const menu = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= menu.offsetTop) {
    //stickyクラスをnavbarに付与する。
    navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

btn.onclick = () => {
  nav.classList.toggle("open");
};

mask.onclick = () => {
  nav.classList.toggle("open");
};