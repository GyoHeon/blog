const template = document.createElement("template");
template.innerHTML = `
  <style>
    app-footer{
      margin-top: auto;
    }
    .main--footer {
      height: 10rem;
      padding: 1rem;
    }
    .main--footer h5 {
      margin-bottom: 1.5rem;
    }
    .main--footer p {
      font-size: 1rem;
      line-height: 1.4rem;
    }
  </style>

  <footer class="main--footer">
    <h5>© 2023 GyoHeon</h5>
    <p>
    This blog is created without any frameworks,
    </br>
    using pure TypeScript, and will focus on sharing
    </br>
    tech-related articles primarily about frontend development.
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
