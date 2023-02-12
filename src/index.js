let btn = document.getElementById("hamburger-open");
let btn2 = document.getElementById("hamburger-close");
let ol = document.getElementById("overlay");
let menu = document.getElementById("menu");

let showMenu = false;

function updateVisibility() {
  if (window.innerWidth >= 768) {
    btn.style.display = "none";
    btn2.style.display = "none";
    menu.style.display = "block";
    ol.style.display = "none";
  } else {
    if (showMenu) {
      btn.style.display = "none";
      btn2.style.display = "block";
      menu.style.display = "block";
      ol.style.display = "block";
    } else {
      btn.style.display = "block";
      btn2.style.display = "none";
      menu.style.display = "none";
      ol.style.display = "none";
    }
  }
}

btn.addEventListener("click", function() {
  showMenu = true;
  updateVisibility();
});

btn2.addEventListener("click", function() {
  showMenu = false;
  updateVisibility();
});

window.addEventListener("resize", updateVisibility);

updateVisibility();
