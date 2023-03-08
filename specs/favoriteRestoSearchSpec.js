import FavoriteRestoSearchPresenter from "../src/scripts/views/pages/liked-resto/favorite-reto-search-presenter";
import favoriteRestoIdb from "../src/scripts/data/favorite-resto-idb";

describe("Searching resto", () => {
  let presenter;

  const searchResto = (query) => {
    const queryElement = document.getElementById("query");
    queryElement.value = query;
    queryElement.dispatchEvent(new Event("change"));
  };

  const setRestoSearchContainer = () => {
    document.body.innerHTML = `
      <div id="resto-search-container">
        <input id="query" type="text">
        <div class="resto-result-container">
          <ul class="resto">
          </ul>
        </div>
      </div>
    `;
  };
  const constructPresenter = () => {
    spyOn(favoriteRestoIdb, "searchResto");
    presenter = new FavoriteRestoSearchPresenter({
      favoriteResto: favoriteRestoIdb,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  it("should be able to capture the query typed by the user", () => {
    searchResto("film a");

    expect(presenter.latestQuery).toEqual("film a");
  });

  it("should ask the model to search for liked Resto", () => {
    searchResto("film a");

    expect(favoriteRestoIdb.searchResto).toHaveBeenCalledWith("film a");
  });
});
