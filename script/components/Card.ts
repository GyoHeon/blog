const template = document.createElement("template");
template.innerHTML = `
  <style>
    article.card {
      height: 500px;
      width: 500px;
      border-radius: 40px;
      background: var(--bg);
      box-shadow: var(--neumo);
      overflow: hidden;
      border: 1px solid var(--border);
    }
    article.card header {
      height: 50%;
      width: 100%;
    }
    article.card header img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    @media (max-width: 679px) {
      article.card {
        margin: 0 20px;
      }
    }
  </style>

  <article class="card">
    <header>
      <img src="https://avatars.githubusercontent.com/u/10047099?v=4" alt="cover image" />
    </header>
    <main></main>
  </article>
  `;

class AppCard extends HTMLElement {
  get imgSrc() {
    return this.getAttribute("imgSrc") || "https://avatars.githubusercontent.com/u/10047099?v=4";
  }

  set imgSrc(value: string) {
    this.setAttribute("imgSrc", value);
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.appendChild(template.content.cloneNode(true));

      const imgSrc = this.imgSrc;
      const imgEl = this.querySelector("img") as HTMLImageElement;

      if (imgSrc) imgEl.setAttribute("src", imgSrc);
    });
  }
}

export default AppCard;
