interface ITodo {
  text: string;
  completed: boolean;
}

const getTodoElement = (todo: ITodo) => {
  const { text, completed } = todo;

  return `
  <li ${completed ? 'class="completed"' : ""}>
    <div class="view>
      <input
        ${completed ? "checked" : ""}
        class="toggle"
        type="checkbox"
      <label>${text}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${text}">
  </li>
  `;
};

const getTodoCount = (todos: ITodo[]) => {
  const { length } = todos.filter((todo: ITodo) => !todo.completed);

  if (length === 1) return "1 Item left";

  return `${length} Item left`;
};

const viewTodos = (targetElement: Node, state: any) => {
  const { currentFilter, todos } = state;

  const element = targetElement.cloneNode(true) as HTMLElement;
  const list = element.querySelector(".todo-list") as HTMLElement;
  const counter = element.querySelector(".todo-count") as HTMLElement;
  const filters = element.querySelector(".fliters") as HTMLElement;

  list.innerHTML = todos.map(getTodoElement).join("");

  counter.textContent = getTodoCount(todos);

  Array.from(filters.querySelectorAll("li a")).forEach((a: Element) => {
    if (a.textContent === currentFilter) {
      a.classList.add("selected");
    } else {
      a.classList.remove("selected");
    }
  });

  return element;
};

export default viewTodos;
