const menubar = document.getElementById("link");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const navbar = document.querySelector("nav");

function openMenu() {
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  menubar.classList.remove("hide-menu");
}

function closeMenu() {
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
  menubar.classList.add("hide-menu");
}
openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

console.log("connected");
// dynamically adding active class to navlinks

const nav_links = document.querySelectorAll(".menus a");
const sections = document.querySelectorAll(".section");

let current_section = "home";

window.addEventListener("scroll", () => {
  sections.forEach((sectEl) => {
    if (sectEl.scrollTop >= sectEl.offsetTop / 8) {
      current_section = sectEl.id;
    }
    nav_links.forEach((linkEl) => {
      if (linkEl.href.includes(current_section)) {
        document.querySelector(".active").classList.remove(".active");
        linkEl.classList.add("active");
      }
    });
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 655.2000122070312) {
    navbar.style.backgroundColor = "#00008B";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
//add dynamic background to hero section
const heroSection = document.getElementById("hero");

// for(let i in imagesList){
//   setInterval(()=>{
//     let myImg=i.url
//     heroSection.style.backgroundImage = `url(${myImg})`;
//   },1000)
// }

// let currentIndex = 0;
// function changeBg() {
//   let myImg = imagesList[currentIndex].url;
//   heroSection.style.backgroundImage = `url(${myImg})`;
//   currentIndex++;
//   if (currentIndex >= imagesList.length) {
//     resetIndex();
//   }
// }
// changeBg();

// function resetIndex() {
//   currentIndex = 0;
//   setInterval(changeBg, 5000);
// }
// resetIndex();

// adding loading effect before the content loads

const loader = document.getElementById("loader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
