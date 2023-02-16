import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img src=${`${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}`} alt="${resto.title}" class="resto__image"/>
  <div class="resto__detail">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Address</h4>
    <p>${resto.address}</p>
    <h4>Description</h4>
    <p>${resto.description}</p>
    <h4>Categories</h4>
    <p>${resto.categories.map((category) => category.name).join(", ")}</p>
    <h4>Menus</h4>
    <p>
      Makanan : ${resto.menus.foods.map((food) => food.name).join(", ")}
    </p>
    <p>
      Minuman : ${resto.menus.drinks.map((drink) => drink.name).join(", ")}
    </p>
    <h4>Customer Reviews</h4>
   ${resto.customerReviews
     .map(
       (review) => `
      <div class="resto__review">
        <div class="resto__user">
            <img src="https://ui-avatars.com/api/?name=${review.name}" alt="user" class="resto__user-image" />
            <p>${review.name}</p>
        </div>
        <p class="resto__review-date">${review.date}</p>
        <p>${review.review}</p>
      </div>
        `
     )
     .join(" ")}
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
         <p class="explore__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></p>
         <p class="explore__description">${restaurant.description}</p>
         </div>
      </div>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };
