import FavoriteRestoIdb from "../src/scripts/data/favorite-resto-idb";
import FavoriteRestoSearchView from "../src/scripts/views/pages/liked-resto/favorite-resto-search-view";
import FavoriteRestoShowPresenter from "../src/scripts/views/pages/liked-resto/favorite-resto-show-presenter";

describe("Showing all favorite resto", () => {
  let view;
  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe("When no resto have been liked", () => {
    it("should ask for the favorite restos", () => {
      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);

      // eslint-disable-next-line no-new
      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });

      expect(favoriteResto.getAllResto).toHaveBeenCalledTimes(1);
    });

    it("should show the information that no resto have been liked", (done) => {
      document.getElementById("restos").addEventListener("restos:updated", () => {
        expect(document.querySelectorAll(".resto-item__not__found").length).toEqual(1);
        done();
      });

      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteResto.getAllResto.and.returnValues([]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });

  describe("When favorite resto exist", () => {
    it("should show the resto", (done) => {
      document.getElementById("restos").addEventListener("restos:updated", () => {
        expect(document.querySelectorAll(".resto-item").length).toEqual(2);
        done();
      });

      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteResto.getAllResto.and.returnValues([
        {
          id: 11,
          title: "A",
          vote_average: 3,
          overview: "Sebuah resto A",
        },
        {
          id: 22,
          title: "B",
          vote_average: 4,
          overview: "Sebuah resto B",
        },
      ]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });
});
