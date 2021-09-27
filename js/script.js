const toggleButton = document.getElementsByClassName("lines")[0];
const navbarLinks = document.getElementsByClassName("nav-button")[0];
const nav = document.getElementsByClassName("navbar")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
