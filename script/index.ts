import getTodos from "./getTodos";
import { add, renderRoot } from "./registry";
import counterView from "./view/counterView";
import filtersView from "./view/filtersView";
import todosView from "./view/todosView";

add("todos", todosView);
add("counter", counterView);
add("filters", filtersView);

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

window.requestAnimationFrame(() => {
  const app = document.querySelector("div#app") as HTMLDivElement;
  const newApp = renderRoot(app, state);
  app.replaceWith(newApp);
});
