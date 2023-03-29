import getTodos from "./getTodos";
import viewTodos from "./view";

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

console.log(state);

const app = document.querySelector("div#app") as HTMLDivElement;

window.requestAnimationFrame(() => {
  const newApp = viewTodos(app, state);
  app.replaceWith(newApp);
});
