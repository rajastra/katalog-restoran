class FooterEl extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ` 
    <footer class="footer">
      <p class="footer__text">Copyright &#169; 2023 - Joe apps </p>
   </footer>`;
  }
}

customElements.define("footer-el", FooterEl);
