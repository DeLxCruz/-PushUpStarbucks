var navMenu = document.getElementById("nav-menu");

document.getElementById("menu-toggle").addEventListener("click", function () {
    // Alternar la visibilidad del menú
    if (navMenu.style.display === "none" || navMenu.style.display === "") {
        navMenu.style.display = "flex";
    } else {
        navMenu.style.display = "none";
    }
});

function changeImage(newSrc) {
    document.getElementById('mainImage').src = newSrc;
}
