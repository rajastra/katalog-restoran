class FavoriteRestoSearchPresenter {
  constructor({ favoriteResto, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteResto = favoriteResto;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchResto(latestQuery);
    });
  }

  async _searchResto(latestQuery) {
    this._latestQuery = latestQuery.trim();
    console.log(this._latestQuery);
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
    this._view.showFavoriteResto(restos);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
