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
const imagesList = [
  {
    url: "data:image/jpeg;base64,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",
  },
  {
    url: "https://media.istockphoto.com/id/1251629816/photo/the-perfect-setting-to-complete-work.webp?b=1&s=170667a&w=0&k=20&c=e8mSv3z6PhT18EUmzgtdMCbQecYzhHoqu_ts8tFdN6c=",
  },
  {
    url: "https://t3.ftcdn.net/jpg/05/84/15/34/360_F_584153441_WpfIM2EpAuB3okdF6fmfiti7tX41hbvP.jpg",
  },
  {
    url: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url: "https://image.slidesdocs.com/responsive-images/background/devices-displaying-responsive-website-on-screen-viewed-from-above-on-wooden-desktop-in-3d-powerpoint-background_073689d322__960_540.jpg",
  },

];
const heroSection = document.getElementById("hero");

// for(let i in imagesList){
//   setInterval(()=>{
//     let myImg=i.url
//     heroSection.style.backgroundImage = `url(${myImg})`;
//   },1000)
// }

let currentIndex = 0;
function changeBg() {
  let myImg = imagesList[currentIndex].url;
  heroSection.style.backgroundImage = `url(${myImg})`;
  currentIndex++;
  if (currentIndex >= imagesList.length) {
    resetIndex();
  }
}
changeBg();

function increaseIndex() {
  setInterval(changeBg, 4000);
}
function resetIndex() {
  currentIndex = 0;
  increaseIndex();
}
increaseIndex();
