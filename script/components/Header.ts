const template = document.createElement("template");
template.innerHTML = `
  <style>
    header.main {
      width:100%;
      height: 80px;
      box-shadow: var(--neumo);
    }
    .main--ul {
      max-width: 700px;
      display: grid;
      grid-auto-flow: column;
      place-items: center;
      height: 100%;
    }
    li.active{
      border-bottom: 2px solid var(--orange);
    }
    a {
      color:white;
      transition: color 0.3s ease-in-out;
    }
    a:hover {
      color: var(--orange);
    }
  </style>

  <header class="main">
    <ul class="main--ul">
      <li>
        <h1>
          <image class="main--logo" src="/image/gear.png" width="50" height="50" alt="main image of blog Developer GyoHeon" />
        </h1>
      </li>
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
