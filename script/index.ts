import { inject } from "@vercel/analytics";
import AppFooter from "./components/Footer";
import AppHeader from "./components/Header";
import page from "./page";
import router from "./router";

const body = document.querySelector("body") as HTMLElement;
customElements.define("app-header", AppHeader);
customElements.define("app-footer", AppFooter);
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
  .addRouter("/posts", pages.posts)
  .addRouter("/", pages.home)
  .setNotFound(pages.notFound)
  .start();

// window.addEventListener("popstate", (evt: PopStateEvent) => {
// const main = document.querySelector("main") as HTMLElement;
// main.innerText = evt.state.id;
// });

// vercel analytics
inject();
