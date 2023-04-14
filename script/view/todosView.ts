import { ITodo } from "./counterView";

let template: HTMLTemplateElement;

const createNewTodoNode = () => {
  if (!template) template = document.querySelector("#todo-item") as HTMLTemplateElement;

  return template.content.firstElementChild?.cloneNode(true) as HTMLElement;
};

const getTodoElement = (todo: ITodo, index: number, events: any) => {
  const { text, completed } = todo;
  const element = createNewTodoNode();

  const inputElement = element.querySelector("input.toggle") as HTMLInputElement;

  inputElement.value = text;
  element.querySelector("label")!.textContent = text;

  if (completed) {
    element.classList.add("completed");
    const checkableInputElement = element.querySelector("input.toggle") as HTMLInputElement;
    checkableInputElement.checked = true;
  }

  const handler = (evt: any) => evt.deleteItem(index);

  element.querySelector("button.destroy")!.addEventListener("click", handler.bind(events));

  return element;
};

const todosView = (targetElement: HTMLElement, { todos }: { todos: ITodo[] }, events: any) => {
  const newTodoList = targetElement.cloneNode(true) as HTMLElement;

  newTodoList.innerHTML = "";

  todos
    .map((todo: ITodo, index: number) => getTodoElement(todo, index, events))
    .forEach((element: HTMLElement) => newTodoList.appendChild(element));

  return newTodoList;
};

export default todosView;
