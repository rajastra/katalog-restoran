import FavoriteRestoIdb from "../../data/favorite-resto-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
    <div class="explore">
      <h2 class="heading-secondary text-center">Explore Restaurant</h2>
      <div class="explore__container">
      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restaurantContainer = document.querySelector(".explore__container");
    if (restaurants.length === 0 || !restaurants) {
      restaurantContainer.innerHTML = `
      <div class="empty">
        <h2 class="heading-secondary">No Restaurant Found</h2>
      </div>
      `;
      document.querySelector(".explore h2").remove();
      return;
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
