class AppHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.innerHTML = `
        <header>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </header>
        `;
    });
  }
}

export default AppHeader;
