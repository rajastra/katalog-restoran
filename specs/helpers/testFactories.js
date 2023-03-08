import LikeButtonPresenter from "../../src/scripts/utils/Like-button-presenter";

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    resto,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
