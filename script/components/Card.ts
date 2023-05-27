interface AppCardProps {
  title: Attr;
  desc: Attr;
  imgSrc?: Attr;
}

const template = document.createElement("template");
template.innerHTML = `
  <style>
    article.card {
      display: flex;
      flex-direction: column;
      height: 20rem;
      width: 20rem;
      border-radius: 40px;
      overflow: hidden;
      border: 1px solid var(--border);
      cursor: pointer;
    }
    article.card header {
      height: 50%;
      width: 100%;
    }
    article.card header img {
      position: relative;
      z-index: -1;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    article.card main {
      padding: 1.5rem;
      word-break: keep-all;
    }
    article.card main h5 {
      margin-bottom: 1.5rem; 
    }
    article.card main p {
      line-height: 1.2;
    }

    @media (max-width: 767px) {
      article.card {
        flex-direction: row;
        width: 100%;
        height: 100%;
      }
      article.card header {
        height: 100%;
        width: 50%;
      }
      article.card header img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      } 
      article.card main {
        width: 50%;
      }
    }
  </style>

  <article class="card">
    <header>
      <img src="" alt="cover image" />
    </header>
    <main></main>
  </article>
  `;

class AppCard extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      const { title, desc, imgSrc } = this.attributes as any as AppCardProps;
      this.appendChild(template.content.cloneNode(true));

      const imgEl = this.querySelector("img") as HTMLImageElement;
      const mainEl = this.querySelector("main") as HTMLElement;

      imgEl.setAttribute("src", imgSrc ? imgSrc.value : "https://avatars.githubusercontent.com/u/10047099?v=4");
      mainEl.innerHTML += `<h5>${title ? title.value : "Title"}</h5>`;
      mainEl.innerHTML += `<p>${desc ? desc.value : "Description"}</p>`;
    });
  }
}

export default AppCard;
