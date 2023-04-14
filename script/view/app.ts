let template: HTMLTemplateElement;

const createAppElement = () => {
  if (!template) template = document.querySelector("#todo-app") as HTMLTemplateElement;

  return template.content.firstElementChild?.cloneNode(true) as Element;
};

const addEvents = (targetElement: HTMLElement, events: any) => {
  const target = targetElement.querySelector(".new-todo") as HTMLElement;
  target.addEventListener("keypress", (evt: KeyboardEvent) => {
    if (evt.key === "Enter") {
      const eventTarget = evt.target as HTMLInputElement;
      events.addItem(eventTarget.value);
      eventTarget.value = "";
    }
  });
};

const app = (targetElement: HTMLElement, state: any, events: any) => {
  const newApp = targetElement.cloneNode(true) as HTMLElement;

  newApp.innerHTML = "";
  newApp.appendChild(createAppElement());

  addEvents(newApp, events);

  return newApp;
};

export default app;
