import page from "./page";
import router from "./router";

const container = document.querySelector("main") as HTMLElement;

const pages = page(container);

const route = router();

route.addRouter("#/", pages.home).addRouter("#/list", pages.list).setNotFound(pages.notFound).start();
