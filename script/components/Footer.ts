const template = document.createElement("template");
template.innerHTML = `
  <style>
    app-footer{
      margin-top: auto;
      box-shadow: var(--neumo);
    }
    .main--footer {
      height: 10rem;
      padding: 1rem;
    }
    .main--footer h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .main--footer p {
      line-height: 1.3rem;
    }
  </style>

  <footer class="main--footer">
    <h2>© 2023 GyoHeon</h2>
    <p>
    This blog is created without any frameworks,
    </br>
    using pure TypeScript, and will focus on sharing
    </br>
    tech-related articles primarily about frontend development.
    </br>
    I hope you enjoy your time here!</p>
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
