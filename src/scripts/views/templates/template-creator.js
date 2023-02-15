import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
      <div class="explore__card">
         <div class="explore__city-box">
         <p class="explore__city">${restaurant.city}</p>
         </div>
         <div class="explore__img-box">
         <img src=${`${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}`} alt="${restaurant.city}" class="explore__image">
      </div>
      <div class="explore__text-box">
         <p class="explore__rating">Rating : ${restaurant.rating}</p>
         <p class="explore__name">${restaurant.name}</p>
         <p class="explore__description">${restaurant.description}</p>
         </div>
      </div>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };
