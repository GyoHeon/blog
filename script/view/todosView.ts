import { ITodo } from "./counterView";

const getTodoElement = ({ text, completed }: ITodo) => {
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

const todosView = (
  targetElement: HTMLElement,
  { todos }: { todos: ITodo[] }
) => {
  const newTodoList = targetElement.cloneNode(true) as HTMLElement;

  const todosElements = todos.map(getTodoElement).join("");

  newTodoList.innerHTML = todosElements;

  return newTodoList;
};

export default todosView;
