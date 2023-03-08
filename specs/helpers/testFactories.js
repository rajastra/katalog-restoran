import FavoriteRestoIdb from "../../src/scripts/data/favorite-resto-idb";
import LikeButtonPresenter from "../../src/scripts/utils/Like-button-presenter";

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteResto: FavoriteRestoIdb,
    resto,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
