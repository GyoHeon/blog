import { renderWrapper } from "./render";

const app = document.querySelector<HTMLDivElement>("div#app") as HTMLDivElement;

const store = {};

const view = (model: HTMLDivElement, state: object) => {
  return model;
};

window.requestAnimationFrame(() => {
  const newApp = view(app, store);
  app.replaceWith(newApp);
});

const renderRoot = (root: HTMLDivElement, state: object) => {
  const cloneComponent = (root: HTMLDivElement) => {
    return root.cloneNode(true);
  };

  return renderWrapper(cloneComponent)(root, state);
};
