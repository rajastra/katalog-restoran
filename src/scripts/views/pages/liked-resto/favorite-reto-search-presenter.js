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
    this._latestQuery = latestQuery;
    const foundRestos = await this._favoriteResto.searchResto(this.latestQuery);

    this._showFoundRestos(foundRestos);
  }

  // eslint-disable-next-line class-methods-use-this
  _showFoundRestos(movies) {
    const html = movies.reduce(
      (carry, movie) => carry.concat(`<li class="resto"><span class="resto__title">${movie.title || "-"}</span></li>`),
      ""
    );

    document.querySelector(".restos").innerHTML = html;
    document.getElementById("resto-search-container").dispatchEvent(new Event("restos:searched:updated"));
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
