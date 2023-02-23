class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<header class="header">
         <div class="nama-resto">
            <p class="nama-resto__main">Joe Apps</p>
            <p class="nama-resto__sub">semua yang anda butuhkan</p>
         </div><a href="#" class="toggle-button" id="hamburgerButton"><span class="bar bar--1"></span><span
            class="bar bar--1"></span><span class="bar bar--1"></span></a>
         <nav class="main-nav" id="navigationDrawer">
            <ul class="main-nav__list">
            <!-- link to root -->
            <li><a href="#/home" class="main-nav__link">Home</a></li>
            <li><a href="#/favorite" class="main-nav__link">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/rajasaputera/" class="main-nav__link">About Us</a></li>
            </ul>
         </nav>
  </header>`;
  }
}

customElements.define("app-bar", AppBar);
