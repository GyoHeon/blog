import AppHeader from "./components/Header";
import page from "./page";
import router from "./router";

const body = document.querySelector("body") as HTMLElement;
customElements.define("app-header", AppHeader);
body.innerHTML = `<app-header></app-header>
<main></main>`;
const container = document.querySelector("main") as HTMLElement;
const pages = page(container);
const route = router();

route
  .addRouter("/list/:id/:anotherId", pages.anotherDetail)
  .addRouter("/list/:id", pages.detail)
  .addRouter("/list", pages.list)
  .addRouter("/", pages.home)
  .setNotFound(pages.notFound)
  .start();

window.addEventListener("popstate", (evt: PopStateEvent) => {
  const main = document.querySelector("main") as HTMLElement;

  main.innerText = evt.state.id;
});
