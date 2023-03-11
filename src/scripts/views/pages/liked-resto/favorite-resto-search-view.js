import { createRestaurantItemTemplate } from "../../templates/template-creator";

class FavoriteRestoSearchView {
  getTemplate() {
    return `
    <div class="content">
      <input id="query" type="text">
      <h2 class="heading-secondary text-center">Your Liked Resto</h2>
      <div id="restos" class="restos">
      </div>
    </div>
     `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById("query").addEventListener("change", (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteResto(restos) {
    let html;
    if (restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(createRestaurantItemTemplate(resto)), "");
    } else {
      html = this._getEmptyRestoTemplate();
    }
    document.getElementById("restos").innerHTML = html;
    document.getElementById("restos").dispatchEvent(new Event("restos:updated"));
  }

  _getEmptyRestoTemplate() {
    return '<div class="resto-item__not__found">Tidak ada resto untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
