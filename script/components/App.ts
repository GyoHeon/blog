import { EVENTS, ITodo } from "./List";

export class App extends HTMLElement {
  state: { todos: ITodo[]; filter: string };
  template: HTMLTemplateElement;

  list: any;
  footer: any;

  constructor() {
    super();
    this.state = {
      todos: [],
      filter: "All",
    };

    this.template = document.querySelector("#todo-app")!;
  }

  deleteItem(index: number) {
    this.state.todos.splice(index, 1);
    this.syncAttributes();
  }

  addItem(text: string) {
    this.state.todos.push({
      text,
      completed: false,
    });
    this.syncAttributes();
  }

  syncAttributes() {
    this.list.todos = this.state.todos;
    this.footer.todos = this.state.todos;
    this.footer.filter = this.state.filter;
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      const content = this.template.content.firstElementChild!.cloneNode(true) as HTMLElement;

      this.appendChild(content);

      (this.querySelector(".new-todo") as HTMLElement)!.addEventListener("keypress", (evt: KeyboardEvent) => {
        if (evt.key === "Enter") {
          const target = evt.target as HTMLInputElement;
          this.addItem(target.value);
          target.value = "";
        }
      });

      this.footer = this.querySelector("todomvc-footer")!;

      this.list = this.querySelector("todomvc-list")!;

      this.list.addEventListener(EVENTS.DELETE_ITEM, (event: CustomEvent) => {
        this.deleteItem(Number(event.detail.index));
      });

      this.syncAttributes();
    });
  }
}
