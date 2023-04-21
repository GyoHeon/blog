import { ITodo } from "./List";

const getTodoCount = (todos: ITodo[]) => {
  const notCompleted = todos.filter((todo) => !todo.completed);

  const { length } = notCompleted;
  if (length === 1) {
    return "1 Item left";
  }

  return `${length} Items left`;
};

export class Footer extends HTMLElement {
  static get observedAttributes() {
    return ["filter", "todos"];
  }

  get todos(): ITodo[] {
    if (!this.hasAttribute("todos")) {
      return [];
    }

    return JSON.parse(this.getAttribute("todos")!) as ITodo[];
  }

  set todos(value) {
    this.setAttribute("todos", JSON.stringify(value));
  }

  get filter(): string {
    return this.getAttribute("filter")!;
  }

  set filter(value: string) {
    this.setAttribute("filter", value);
  }

  connectedCallback() {
    const template = document.querySelector("#footer") as HTMLTemplateElement;
    const content = template.content.firstElementChild!.cloneNode(true);

    this.appendChild(content);

    const { filter, todos } = this;

    this.querySelectorAll("li a").forEach((a) => {
      if (a.textContent === filter) {
        a.classList.add("selected");
      } else {
        a.classList.remove("selected");
      }
    });

    const label = getTodoCount(todos);

    this.querySelector("span.todo-count")!.textContent = label;
  }
}
