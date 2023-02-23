import TheRestaurantSource from "../../data/therestaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <section class="section-hero">
    <div class="hero">
      <div class="hero__text-box">
        <h1 class="heading-primary">Experience a world of taste without leaving your door, with our restaurant
          finding app.</h1>
        <p class="hero__description">"Our restaurant finding app is your one-stop solution for discovering the best
          dining experiences. From finding the perfect local gem to trying out a new cuisine, our app makes it easy
          for you to search and find the perfect restaurant. With just a few taps, you can access a wealth of
          information about restaurants in your area, including detailed menus, customer reviews, and ratings. Whether
          you're in the mood for a quick bite or a fine dining experience, our app will help you find it. Download now
          and start savoring the flavors of the world!</p>
      </div>
      <div class="hero__img-box">
        <img src="./images/heros/hero-image_2.jpg" alt="hero image" class="hero__image">
      </div>
    </div>
  </section>
  <section class="section-explore">
      <div class="explore">
        <h2 class="heading-secondary text-center">Explore Restaurant</h2>
        <div class="explore__container">
        </div>
      </div>
    </section>
    <section class="section-cta" id="cta">
    <div class="container">
      <div class="cta">
        <div class="cta-text-box">
          <h2 class="heading-secondary">Get your first Restaurant</h2>
          <p class="cta-text">
            Experience the convenience of a seamless dining experience by signing up now on our restaurant finder app
          </p>

          <form class="cta-form" name="sign-up" netlify>
            <div>
              <label for="full-name">Full Name</label>
              <input id="full-name" type="text" placeholder="Raja Saputera" name="full-name" required />
            </div>

            <div>
              <label for="email">Email address</label>
              <input id="email" type="email" placeholder="me@example.com" name="email" required />
            </div>

            <div>
              <label for="select-where">Where did you hear from us?</label>
              <select id="select-where" name="select-where" required>
                <option value="">Please choose one option:</option>
                <option value="friends">Friends and family</option>
                <option value="youtube">YouTube video</option>
                <option value="podcast">Podcast</option>
                <option value="ad">Facebook ad</option>
                <option value="others">Others</option>
              </select>
            </div>

            <button class="btn btn--form">Sign up now</button>

            <!-- <input type="checkbox" />
            <input type="number" /> -->
          </form>
        </div>
      </div>
    </div>
  </section>
       `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector(".explore__container");
    // show loading spinner
    restaurantContainer.innerHTML = `
    <div class="loader">
      <div class="loader__spinner"></div>
    </div>
    `;
    const restaurants = await TheRestaurantSource.restaurantList();
    if (restaurants.length === 0 || !restaurants) {
      restaurantContainer.innerHTML = `
      <div class="empty">
        <h2 class="heading-secondary">No Restaurant Found</h2>
        <p class="empty__description">Please try again later</p>
      </div>
      `;
      return;
    }
    // hide loading spinner
    if (restaurants.length > 0) {
      restaurantContainer.innerHTML = "";
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
