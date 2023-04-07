let template: HTMLTemplateElement;

const createAppElement = () => {
  if (!template) template = document.querySelector("#todo-app") as HTMLTemplateElement;

  return template.content.firstElementChild?.cloneNode(true) as Element;
};

const app = (targetElement: HTMLElement) => {
  const newApp = targetElement.cloneNode(true) as Element;
  newApp.innerHTML = "";
  newApp.appendChild(createAppElement());
  return newApp;
};

export default app;
