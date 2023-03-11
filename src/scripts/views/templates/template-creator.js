import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (resto) => `
  <button onclick="history.back()" class="back-btn">Go Back</button>
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
        </div>
        <div class="resto__review-desc">
          <p>${review.name}</p>
          <p class="resto__review-date">${review.date}</p>
          <p>${review.review}</p>
        </div>
      </div>
        `
     )
     .join(" ")}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
      <div class="resto-item">
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

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFormReviewTemplate = () => `
  <form class="form-review">
    <h2 class="form-review__title">Add Review</h2>
    <div class="form-review__input">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your Name" required />
    </div>
    <div class="form-review__input">
      <label for="review">Review</label>
      <textarea id="review" name="review" placeholder="Your Review" required></textarea>
    </div>
    <button type="submit" class="form-review__submit">Submit</button>
  </form>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createFormReviewTemplate,
};
