import applyDiff from "./applyDiff";
import { add, renderRoot } from "./registry";
import app from "./view/app";
import counterView from "./view/counterView";
import filtersView from "./view/filtersView";
import todosView from "./view/todosView";

interface IState {
  todos: { text: string; completed: boolean }[];
  currentFilter: string;
}

add("app", app);
add("todos", todosView);
add("counter", counterView);
add("filters", filtersView);

const state: IState = {
  todos: [],
  currentFilter: "All",
};

const events = {
  deleteItem: (idx: number) => {
    state.todos.splice(idx, 1);
    render();
  },
  addItem: (text: string) => {
    state.todos.push({ text, completed: false });
    render();
  },
};

const render = () => {
  window.requestAnimationFrame(() => {
    const app = document.querySelector("div#root") as HTMLDivElement;
    const newApp = renderRoot(app, state, events);

    applyDiff(document.body, app, newApp);
  });
};

render();
