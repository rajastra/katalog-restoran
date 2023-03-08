import TheRestaurantSource from "../../data/therestaurant-source";
import UrlParser from "../../routes/url-parser";
import FormReview from "../../utils/form-review";
import LikeButtonPresenter from "../../utils/Like-button-presenter";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
          <div class="resto"></div>
          <div class="new-review"></div>
          <div id="likeButtonContainer"></div>
          <form class="form-review">
            <h2 class="form-review__title">Add Review</h2>
            <div class="form-review__container">
              <label for="name" class="form-review__label">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required class="form-review__input"/>
              <label for="review" class="form-review__label">Review</label>
              <textarea id="review" name="review" placeholder="Your Review" required class="form-review__input"></textarea>
            </div>
            <button type="submit" class="form-review__submit">Submit</button>
        </form>
       `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector(".resto");
    detailContainer.innerHTML = `
    <div class="loader">
      <div class="loader__spinner"></div>
    </div>
    `;
    const { restaurant } = await TheRestaurantSource.detailRestaurant(url.id);
    // render failed
    if (!restaurant) {
      detailContainer.innerHTML = `
      <div class="empty">
        <h2 class="heading-secondary">No Restaurant Found</h2>
        <p class="empty__description">Please try again later</p>
      </div>
      `;
      return;
    }

    if (restaurant) {
      detailContainer.innerHTML = "";
    }

    detailContainer.innerHTML += createRestaurantDetailTemplate(restaurant);

    FormReview.init({
      form: document.querySelector(".form-review"),
      name: document.querySelector("#name"),
      review: document.querySelector("#review"),
      reviewContainer: document.querySelector(".new-review"),
      id: restaurant.id,
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      resto: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        address: restaurant.address,
        description: restaurant.description,
        catagories: restaurant.categories,
        customerReviews: restaurant.customerReviews,
        menus: restaurant.menus,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
