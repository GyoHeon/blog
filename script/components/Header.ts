class AppHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.innerHTML = `
        <header>
          <ul>
            <li><a data-navigation href="/">Go To Home</a></li>
            <li><a data-navigation href="/list">Go To Lits</a></li>
            <li><a data-navigation href="/list/1">Go To Detail with Id 1</a></li>
            <li><a data-navigation href="/list/2">Go To Detail with Id 2</a></li>
            <li><a data-navigation href="/list/1/2">Go To Another Detail</a></li>
            <li><a data-navigation href="/dummy">Dummy Page</a></li>
          </ul>
        </header>
        `;
    });
  }
}

export default AppHeader;
