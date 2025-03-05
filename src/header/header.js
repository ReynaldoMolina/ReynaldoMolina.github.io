class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header flx flx-center">
        <!-- <a href="/" class="header-logo flx flx-center">
          <img src="/src/assets/icons/logo.svg" alt="Logo">
        </a> -->
        <nav class="flx">
          <a href="/" class="header-link">Home</a>
          <a href="/#about-section" class="header-link">About</a>
          <a href="/#portfolio-section" class="header-link">Portfolio</a>
        </nav>
      </header>
    `
  }
}

customElements.define('custom-header', Header);