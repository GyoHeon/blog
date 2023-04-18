import { ITodo } from "./counterView";

let template: HTMLTemplateElement;

const createNewTodoNode = () => {
  if (!template) template = document.querySelector("#todo-item") as HTMLTemplateElement;

  return template.content.firstElementChild?.cloneNode(true) as HTMLElement;
};

const getTodoElement = (todo: ITodo, index: number) => {
  const { text, completed } = todo;
  const element = createNewTodoNode();

  const inputElement = element.querySelector("input.toggle") as HTMLInputElement;
  const labelElement = element.querySelector("label") as HTMLLabelElement;
  const buttonElement = element.querySelector("button.destroy") as HTMLButtonElement;

  inputElement.value = text;
  labelElement.textContent = text;

  if (completed) {
    element.classList.add("completed");
    const checkableInputElement = element.querySelector("input.toggle") as HTMLInputElement;
    checkableInputElement.checked = true;
  }

  buttonElement.dataset.index = index.toString();

  return element;
};

const todosView = (
  targetElement: HTMLElement,
  { todos }: { todos: ITodo[] },
  { deleteItem }: { deleteItem: Function }
) => {
  const newTodoList = targetElement.cloneNode(true) as HTMLElement;

  newTodoList.innerHTML = "";

  todos
    .map((todo: ITodo, index: number) => getTodoElement(todo, index))
    .forEach((element: HTMLElement) => newTodoList.appendChild(element));

  newTodoList.addEventListener("click", (evt: Event) => {
    if (!(evt.target instanceof HTMLButtonElement)) return;
    if (evt.target!.matches("button.destroy")) {
      if (!evt.target!.dataset.index) return;
      deleteItem(evt.target!.dataset.index);
    }
  });

  return newTodoList;
};

export default todosView;
