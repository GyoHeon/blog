import getTodos from "./getTodos";
import appView from "./view/app";

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

const app = document.querySelector("div#app") as HTMLDivElement;

window.requestAnimationFrame(() => {
  const newApp = appView(app, state);
  app.replaceWith(newApp);
});
