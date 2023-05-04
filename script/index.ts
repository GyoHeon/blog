import { inject } from "@vercel/analytics";
import AppCard from "./components/Card";
import AppFooter from "./components/Footer";
import AppHeader from "./components/Header";
import page from "./page";
import router from "./router";

const body = document.querySelector("body") as HTMLElement;
customElements.define("app-header", AppHeader);
customElements.define("app-footer", AppFooter);
customElements.define("app-card", AppCard);
body.innerHTML = `
  <style>
    body > main {
      display: grid;
      grid-auto-flow: row;
      grid-gap: 2rem;
      margin: 2rem;
    }
  </style>
  <app-header></app-header>
    <main></main>
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
