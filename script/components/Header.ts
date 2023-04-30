const template = document.createElement("template");
template.innerHTML = `
  <style>
    header {
      max-width: 700px;
      height: 80px;
      border-bottom: 1px solid #DAA276;
    }
    img {
      width: 50px;
      height: 50px;
    }
    ul {
      display: grid;
      grid-auto-flow: column;
      place-items: center;
      height: 100%;
    }
    li.active{
      border-bottom: 2px solid #DAA276;
    }
    a {
      color:white;
      transition: color 0.3s ease-in-out;
    }
    a:hover {
      color:#DAA276;
    }
  </style>

  <header>
    <ul>
      <li>
        <h1>
          <image src='/image/gear.png' alt='main image of blog Developer GyoHeon' />
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
