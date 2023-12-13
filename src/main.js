var navMenu = document.getElementById("nav-menu");

document.getElementById("menu-toggle").addEventListener("click", function () {
  // Alternar la visibilidad del menú
  if (navMenu.style.display === "none" || navMenu.style.display === "") {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none";
  }
});

function changeContent(newSrc, newTitle, newDescription) {
  document.getElementById("mainImage").src = newSrc;
  document.getElementById("mainTitle").innerText = newTitle;
  document.getElementById("mainDescription").innerText = newDescription;
}
