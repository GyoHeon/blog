import page from "./page";
import router from "./router";

const NAV_BTN_SELECTOR = "button[data-navigate]";

const container = document.querySelector("main") as HTMLElement;

const pages = page(container);

const route = router();

route
  .addRouter("#/list/:id/:anotherId", pages.anotherDetail)
  .addRouter("#/list/:id", pages.detail)
  .addRouter("#/list", pages.list)
  .addRouter("#/", pages.home)
  .setNotFound(pages.notFound)
  .start();

document.body.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLElement;

  if (target.matches(NAV_BTN_SELECTOR)) {
    const path = target.dataset.navigate as string;
    route.navigate(path);
  }
});
