class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header flex flx-center">
        <a href="#" class="header-title">&lt;/RM&gt;</a>
        <div class="flx">
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>
        <input type="search" placeholder="Search">
      </header>
    `
  }
}

customElements.define('custom-header', Header);

export { Header };