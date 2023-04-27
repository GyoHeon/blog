const template = document.createElement("template");
template.innerHTML = `
  <style>
    footer {
      height: 50px;
      background-color: #333;
    }
  </style>

  <footer>
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
