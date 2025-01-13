class MySkills extends HTMLElement {
  connectedCallback() {
    const skills = [
      {
        name: 'CSS',
        icon: '/assets/icons/css3.svg'
      },
      {
        name: 'JavaScript',
        icon: '/assets/icons/javascript.svg'
      }
    ];

    this.innerHTML = `
      <section class="skills-container">
        <h1>My skills</h1>
        <div class="flx skill-cards">
          <div class="flx flx-col flx-center skill-card">
            <img src="/assets/icons/javascript.svg" alt="CSS">
            <figcaption>JavaScript</figcaption>
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('my-skills', MySkills);