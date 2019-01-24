(function() {
  let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let iconToggle = document.getElementById("icon-toggle-menu");
let iconToggleClose = document.getElementById("icon-toggle-close");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
    iconToggle.classList.toggle("noactive");
    iconToggleClose.classList.toggle("active");
});

}());