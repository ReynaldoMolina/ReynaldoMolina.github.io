class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="flx flx-center">
        <div class="header flx flx-center">
          <a href="/index.html" class="header-logo flx flx-center">
            <img src="/assets/icons/logo.svg" alt="logo">
          </a>
          <div class="flx">
            <a href="/index.html" class="header-link">About</a>
            <a href="/html/portfolio.html" class="header-link">Portfolio</a>
          </div>
        </div>
      </header>
    `
  }
}

customElements.define('custom-header', Header);

export { Header };