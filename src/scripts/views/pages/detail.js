import TheRestaurantSource from "../../data/therestaurant-source";
import UrlParser from "../../routes/url-parser";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
          <div class="resto"></div>
          <div id="likeButtonContainer"></div>
       `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await TheRestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector(".resto");
    detailContainer.innerHTML += createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
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
      },
    });
  },
};

export default Detail;
