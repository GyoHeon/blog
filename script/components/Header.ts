const template = document.createElement("template");
template.innerHTML = `
  <style>
    header.main {
      width:100%;
      height: 5rem;
      padding: 0 2rem;
      box-shadow: var(--neumo);
    }
    .main--ul {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }
    li.logo {
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      box-shadow: var(--neumo);
    }
    li.logo a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0 0.5rem;
    }
    li.logo:hover {
      border-color: transparent;
      box-shadow: var(--neumo-reverse);
    }
    li.active {
      border-bottom: 2px solid var(--orange);
    }
    a {
      color:white;
      transition: color 0.3s ease-in-out;
    }
    a:hover {
      color: var(--orange);
    }
    @media (max-width: 679px) {
      li.logo img{
        height: 25px;
        width: 25px;
      }
    }
  </style>

  <header class="main">
    <ul class="main--ul">
      <li class="logo">
        <a data-navigation href="/">
          <h1>
            <image class="main--logo" src="/image/gear.png" width="50" height="50" alt="main image of blog Developer GyoHeon" />
          </h1>
          Home
        </a>
      </li>
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
