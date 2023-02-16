import TheRestaurantSource from "../../data/therestaurant-source";
import UrlParser from "../../routes/url-parser";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
          <div class="resto"></div>
       `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await TheRestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector(".resto");
    console.log(detail);
    detailContainer.innerHTML += createRestaurantDetailTemplate(detail.restaurant);
  },
};

export default Detail;
