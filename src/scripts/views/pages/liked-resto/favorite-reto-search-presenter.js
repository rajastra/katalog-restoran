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

  _searchResto(latestQuery) {
    this._latestQuery = latestQuery;
    this._favoriteResto.searchResto(this.latestQuery);
  }

  _showFoundRestos(movies) {
    const html = movies.reduce(
      (carry, movie) => carry.concat(`<li class="resto"><span class="resto__title">${movie.title || "-"}</span></li>`),
      ""
    );

    document.querySelector(".restos").innerHTML = html;
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
