import TheRestaurantSource from "../data/therestaurant-source";
import UrlParser from "../routes/url-parser";

const FormReview = {
  init({ form, name, review, reviewContainer }) {
    this._form = form;
    this._name = name;
    this._review = review;
    this._reviewContainer = reviewContainer;

    this.submitForm();
  },

  async submitForm() {
    this._form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const data = {
        id: url.id,
        name: this._name.value,
        review: this._review.value,
      };
      const response = await TheRestaurantSource.postReview(data);
      const userReview = response.customerReviews[response.customerReviews.length - 1];
      this._reviewContainer.innerHTML += `
         <div class="resto__review">
            <div class="resto__user">
               <img src="https://ui-avatars.com/api/?name=${userReview.name}" alt="user" class="resto__user-image" />
            </div>
            <div class="resto__review-desc">
            <p>${userReview.name}</p>
            <p class="resto__review-date">${userReview.date}</p>
            <p>${userReview.review}</p>
            </div>
         </div>`;

      if (response) {
        this._name.value = "";
        this._review.value = "";
      }
    });
  },
};

export default FormReview;
