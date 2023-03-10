class FavoriteRestoSearchPresenter {
  constructor({ favoriteResto }) {
    this._listenToSearchRequestByUser();
    this._favoriteResto = favoriteResto;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById("query");
    this._queryElement.addEventListener("change", (event) => {
      this._searchResto(event.target.value);
    });
  }

  async _searchResto(latestQuery) {
    this._latestQuery = latestQuery.trim();
    let foundRestos;
    if (this.latestQuery.length > 0) {
      foundRestos = await this._favoriteResto.searchResto(this.latestQuery);
    } else {
      foundRestos = await this._favoriteResto.getAllResto();
    }

    this._showFoundRestos(foundRestos);
  }

  // eslint-disable-next-line class-methods-use-this
  _showFoundRestos(restos) {
    let html;
    if (restos.length > 0) {
      html = restos.reduce(
        (carry, resto) =>
          carry.concat(`<li class="resto"><span class="resto__title">${resto.title || "-"}</span></li>`),
        ""
      );
    } else {
      html = '<div class="restos__not__found">Resto tidak ditemukan</div>';
    }

    document.querySelector(".restos").innerHTML = html;
    document.getElementById("resto-search-container").dispatchEvent(new Event("restos:searched:updated"));
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
