const template = document.createElement("template");
template.innerHTML = `
  <style>
    header {
      height: 50px;
      background-color: #333;
    }
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }
    a {
      color:white;
      transition: color 0.3s ease-in-out;
    }
    a:hover {
      color: #ccc;
    }
  </style>

  <header>
    <ul>
      <li><a data-navigation href="/">Home</a></li>
      <li><a data-navigation href="/posts">Posts</a></li>
      <li><a data-navigation href="/resume">Resume</a></li>
      <li><a data-navigation href="/portfolio">Portfolio</a></li>
      <li><a data-navigation href="/memo">Memo</a></li>
    </ul>
  </header>
  `;

class AppHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.appendChild(template.content.cloneNode(true));
    });
  }
}

export default AppHeader;
