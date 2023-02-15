const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener("click", (event) => {
      const btn = event.target.closest("#hamburgerButton");
      btn.classList.toggle("active");
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.preventDefault();
    event.stopPropagation();
    drawer.classList.toggle("active");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("active");
  },
};

export default DrawerInitiator;
