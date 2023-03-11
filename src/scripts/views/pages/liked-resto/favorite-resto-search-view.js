import { createRestaurantItemTemplate } from "../../templates/template-creator";

class FavoriteRestoSearchView {
  getTemplate() {
    return `
    <div class="content">
      <input id="query" type="text">
      <h2 class="content__heading">Your Liked Resto</h2>
      <div id="resto-search-container">
        <div id="restos" class="restos">
        </div>
      </div>
    </div>
     `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById("query").addEventListener("change", (event) => {
      callback(event.target.value);
    });
  }

  showResto(restos) {
    let html;
    if (restos.length > 0) {
      html = restos.reduce((carry, resto) => carry.concat(createRestaurantItemTemplate(resto)), "");
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.querySelector(".restos").innerHTML = html;

    document.getElementById("resto-search-container").dispatchEvent(new Event("restos:searched:updated"));
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
