import TheRestaurantSource from "../../data/therestaurant-source";
import UrlParser from "../../routes/url-parser";

const Detail = {
  async render() {
    return `
          <h1>Detail Page</h1>
       `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await TheRestaurantSource.detailRestaurant(url.id);
    console.log(detail);
  },
};

export default Detail;
