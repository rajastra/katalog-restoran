import FavoriteRestoIdb from "../../data/favorite-resto-idb";
// import { createRestaurantItemTemplate } from "../templates/template-creator";
import FavoriteRestoSearchView from "./liked-resto/favorite-resto-search-view";
import FavoriteRestoShowPresenter from "./liked-resto/favorite-resto-show-presenter";
import FavoriteRestoSearchPresenter from "./liked-resto/favorite-reto-search-presenter";

const view = new FavoriteRestoSearchView();

/* 
  <div class="explore">
      <h2 class="heading-secondary text-center">Explore Restaurant</h2>
      <div class="explore__container">
      </div>
    </div>
*/

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteResto: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteResto: FavoriteRestoIdb });
  },
};

export default Favorite;
