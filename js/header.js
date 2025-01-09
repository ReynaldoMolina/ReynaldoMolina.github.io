class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="flx flx-center">
        <div class="header flx flx-center">
          <a href="#" class="header-logo flx flx-center">
            <img src="/assets/icons/logo.svg" alt="logo">
          </a>
          <div class="flx">
            <a href="#" class="header-link">About</a>
            <a href="#" class="header-link">Portfolio</a>
            <a href="#" class="header-link">Contact</a>
          </div>
          <div class="flx header-search">
            <input class="header-search-input" type="search" placeholder="Search">
            <button class="flx flx-center header-search-button">
              <img src="/assets/icons/search.svg" alt="search">
            </button>
          </div>
        </div>
      </header>
    `
  }
}

customElements.define('custom-header', Header);

export { Header };