const template = document.createElement("template");
template.innerHTML = `
  <style>
    article.card {
      height: 20rem;
      width: 20rem;
      border-radius: 2rem;
      background: #403a36;
      box-shadow: var(--neumo);
      overflow: hidden;
    }
    article.card header {
      height: 50%;
      width: 100%;
      background: var(--orange);
    }
    article.card header img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    @media (max-width: 800px) {
    }
  </style>

  <article class="card">
    <header>
      <img src="https://avatars.githubusercontent.com/u/10047099?v=4" alt="avatar" />
    </header>
    <main></main>
  </article>
  `;

class AppCard extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.appendChild(template.content.cloneNode(true));
    });
  }
}

export default AppCard;
