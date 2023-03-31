export interface ITodo {
  text: string;
  completed: boolean;
}

const getTodoCount = (todos: ITodo[]) => {
  const { length } = todos.filter((todo: ITodo) => !todo.completed);

  if (length === 1) return "1 Item left";

  return `${length} Item left`;
};

const counterView = (
  targetElement: HTMLElement,
  { todos }: { todos: ITodo[] }
) => {
  const newCounter = targetElement.cloneNode(true);
  newCounter.textContent = getTodoCount(todos);

  return newCounter;
};

export default counterView;
