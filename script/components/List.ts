export interface ITodo {
  text: string;
  completed: boolean;
}

const TEMPLATE = '<ul class="todo-list"></ul>';

export const EVENTS = {
  DELETE_ITEM: "DELETE_ITEM",
};

export class List extends HTMLElement {
  list: any;
  itemTemplate: any;

  static get observedAttributes(): string[] {
    return ["todos"];
  }

  get todos(): ITodo[] {
    if (!this.hasAttribute("todos")) {
      return [];
    }

    return JSON.parse(this.getAttribute("todos")!) as ITodo[];
  }

  set todos(value: ITodo[]) {
    this.setAttribute("todos", JSON.stringify(value));
  }

  onDeleteClick(index: string) {
    const event = new CustomEvent(EVENTS.DELETE_ITEM, {
      detail: { index },
    });

    this.dispatchEvent(event);
  }

  createNewTodoNode(): HTMLElement {
    return this.itemTemplate.content.firstElementChild.cloneNode(true);
  }

  getTodoElement(todo: ITodo, index: number) {
    const { text, completed } = todo;

    const element = this.createNewTodoNode();

    element.querySelector<HTMLInputElement>("input.edit")!.value = text;
    element.querySelector<HTMLLabelElement>("label")!.textContent = text;

    if (completed) {
      element.classList.add("completed");
      element.querySelector<HTMLInputElement>("input.toggle")!.checked = true;
    }

    element.querySelector<HTMLButtonElement>("button.destroy")!.dataset.index = String(index);

    return element;
  }

  updateList() {
    this.list.innerHTML = "";

    this.todos
      .map((todo, index) => this.getTodoElement(todo, index))
      .forEach((element) => this.list.appendChild(element));
  }

  connectedCallback() {
    this.innerHTML = TEMPLATE;
    this.itemTemplate = document.querySelector("#todo-item");

    this.list = this.querySelector<HTMLUListElement>("ul");

    this.list.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLButtonElement;
      if (target.matches("button.destroy")) {
        this.onDeleteClick(target.dataset.index!);
      }
    });

    this.updateList();
  }

  attributeChangedCallback() {
    this.updateList();
  }
}
