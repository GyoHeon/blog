import { inject } from "@vercel/analytics";
import AppCard from "./components/Card";
import AppFooter from "./components/Footer";
import AppHeader from "./components/Header";
import LGH from "./components/LGH";
import page from "./page";
import router from "./router";

customElements.define("app-header", AppHeader);
customElements.define("app-footer", AppFooter);
customElements.define("app-card", AppCard);
customElements.define("lgh-card", LGH);

const body = document.querySelector("body") as HTMLElement;
body.innerHTML = `
  <style>
    .layout {
      display: flex;
    }
    .layout > .lgh {
      background: var(--red);
      width: 30rem;
      margin: 1rem;
    }
    .layout > main {
      display: grid;
      grid-auto-flow: row;
      grid-gap: 2rem;
      margin: 2rem;
    }
    @media (max-width: 767px) {
      .layout > .lgh {
        position: absolute;
        transform: translateX(-100%);
      }
    }
  </style>
  <app-header></app-header>
    <div class="layout">
      <lgh-card></lgh-card>
      <main></main>
    </div>
  <app-footer></app-footer>
`;

const container = document.querySelector("main") as HTMLElement;
const pages = page(container);
const route = router();

route
  .addRouter("/posts/:slug", pages.post)
  .addRouter("/memo", pages.memo)
  .addRouter("/portfolio", pages.portfolio)
  .addRouter("/resume", pages.resume)
  .addRouter("/", pages.home)
  .setNotFound(pages.notFound)
  .start();

// vercel analytics
inject();
