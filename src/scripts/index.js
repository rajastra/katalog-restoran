import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";

console.log("Hello Coders! :)");

const toggleButon = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".main-nav");

toggleButon.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  toggleButon.classList.toggle("active");
});
