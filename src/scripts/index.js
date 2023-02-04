import "regenerator-runtime";
/* for async await transpile */
import "../styles/main.scss";
import data from "../DATA.json";

console.log("Hello Coders! :)");

const toggleButon = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".main-nav");

toggleButon.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  toggleButon.classList.toggle("active");
});

const exploreContainer = document.querySelector(".explore__container");

const generateExplore = (explore) => {
  return `
  <div class="explore__card">
  <div class="explore__city-box">
    <p class="explore__city">${explore.city}</p>
  </div>
  <div class="explore__img-box">
    <img src=${explore.pictureId} alt="${explore.city}" class="explore__image">

  </div>
  <div class="explore__text-box">
    <p class="explore__rating">Rating : ${explore.rating}</p>
    <p class="explore__name">${explore.name}</p>
    <p class="explore__description">${explore.description}</p>
  </div>
</div>
  `;
};

const generateMarkup = (data) => {
  const exploreMarkup = data.restaurants
    .map((explore) => generateExplore(explore))
    .join("");
  exploreContainer.insertAdjacentHTML("beforeend", exploreMarkup);
};

generateMarkup(data);
