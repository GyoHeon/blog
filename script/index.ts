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
