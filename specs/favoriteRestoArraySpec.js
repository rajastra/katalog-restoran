import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";

let favoriteResto = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return, eqeqeq
    return favoriteResto.find((resto) => resto.id == id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resto.hasOwnProperty("id")) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteResto.push(resto);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    // eslint-disable-next-line eqeqeq
    favoriteResto = favoriteResto.filter((resto) => resto.id != id);
  },

  searchResto(query) {
    return this.getAllResto().filter((resto) => {
      const loweredCaseRestoTitle = (resto.name || "-").toLowerCase();
      const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, "");
      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, "");
      return jammedRestoTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe("Favorite resto Array Contract Test Implementation", () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => (favoriteResto = []));

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
