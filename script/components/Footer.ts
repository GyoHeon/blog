const template = document.createElement("template");
template.innerHTML = `
  <style>
    app-footer{
      margin-top: auto;
      box-shadow: var(--neumo);
    }
    footer {
      height: 50px;
    }
  </style>

  <footer>
    <h2>© 2023 GyoHeon</h2>
    <p>This blog is made by pure TypeScript. All of Codes is </p>
  </footer>
  `;

class AppFooter extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.appendChild(template.content.cloneNode(true));
    });
  }
}

export default AppFooter;
