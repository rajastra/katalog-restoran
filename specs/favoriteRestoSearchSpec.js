import FavoriteRestoSearchPresenter from "../src/scripts/views/pages/liked-resto/favorite-reto-search-presenter";
import FavoriteRestoIdb from "../src/scripts/data/favorite-resto-idb";

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
          <ul class="restos">
          </ul>
        </div>
      </div>
    `;
  };
  const constructPresenter = () => {
    spyOn(FavoriteRestoIdb, "searchResto");
    presenter = new FavoriteRestoSearchPresenter({
      favoriteResto: FavoriteRestoIdb,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  it("should be able to capture the query typed by the user", () => {
    searchResto("resto a");

    expect(presenter.latestQuery).toEqual("resto a");
  });

  it("should ask the model to search for liked Resto", () => {
    searchResto("resto a");

    expect(FavoriteRestoIdb.searchResto).toHaveBeenCalledWith("resto a");
  });

  it("should show the found restos", () => {
    presenter._showFoundRestos([{ id: 1 }]);
    expect(document.querySelectorAll(".resto").length).toEqual(1);

    presenter._showFoundRestos([
      { id: 1, title: "Satu" },
      { id: 2, title: "Dua" },
    ]);
    expect(document.querySelectorAll(".resto").length).toEqual(2);
  });

  it("should show the title of the found restos", () => {
    presenter._showFoundRestos([{ id: 1, title: "Satu" }]);
    expect(document.querySelectorAll(".resto__title").item(0).textContent).toEqual("Satu");
  });

  it("should show the title of the found restos", () => {
    presenter._showFoundRestos([{ id: 1, title: "Satu" }]);
    expect(document.querySelectorAll(".resto__title").item(0).textContent).toEqual("Satu");

    presenter._showFoundRestos([
      { id: 1, title: "Satu" },
      { id: 2, title: "Dua" },
    ]);

    const restoTitles = document.querySelectorAll(".resto__title");
    expect(restoTitles.item(0).textContent).toEqual("Satu");
    expect(restoTitles.item(1).textContent).toEqual("Dua");
  });

  it("should show - for found resto without title", () => {
    presenter._showFoundRestos([{ id: 1 }]);

    expect(document.querySelectorAll(".resto__title").item(0).textContent).toEqual("-");
  });

  it("should show the resto found by Favorite resto", (done) => {
    document.getElementById("resto-search-container").addEventListener("restos:searched:updated", () => {
      expect(document.querySelectorAll(".resto").length).toEqual(3);
      done();
    });

    FavoriteRestoIdb.searchResto.withArgs("resto a").and.returnValues([
      { id: 111, title: "resto abc" },
      { id: 222, title: "ada juga resto abcde" },
      { id: 333, title: "ini juga boleh resto a" },
    ]);

    searchResto("resto a");
  });

  it("should show the name of the resto found by Favorite resto", (done) => {
    document.getElementById("resto-search-container").addEventListener("restos:searched:updated", () => {
      const restoTitles = document.querySelectorAll(".resto__title");
      expect(restoTitles.item(0).textContent).toEqual("resto abc");
      expect(restoTitles.item(1).textContent).toEqual("ada juga resto abcde");
      expect(restoTitles.item(2).textContent).toEqual("ini juga boleh resto a");

      done();
    });

    FavoriteRestoIdb.searchResto.withArgs("resto a").and.returnValues([
      { id: 111, title: "resto abc" },
      { id: 222, title: "ada juga resto abcde" },
      { id: 333, title: "ini juga boleh resto a" },
    ]);

    searchResto("resto a");
  });
});
