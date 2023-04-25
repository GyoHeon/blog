import page from "./page";
import router from "./router";

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

window.addEventListener("popstate", () => {
  console.log("Popstate event fired!");
});
