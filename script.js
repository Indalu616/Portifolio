const menubar = document.getElementById("link");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

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
