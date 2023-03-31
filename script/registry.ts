interface IRegistry {
  [key: string]: Function;
}

const registry: IRegistry = {};

const renderWrapper: Function = (component: Function) => (targetElement: Element, state: any) => {
  const element: HTMLElement = component(targetElement, state);

  const childComponents = element.querySelectorAll<HTMLElement>("[data-component]");

  Array.from(childComponents).forEach((target: HTMLElement) => {
    const name = target.dataset.component;

    const child = registry[name || ""] || false;
    if (!child) return;

    target.replaceWith(child(target, state));
  });

  return element;
};

export const add = (name: string, component: Function) => (registry[name] = renderWrapper(component));

export const renderRoot = (root: HTMLElement, state: any) => {
  const cloneComponent = (root: Element) => root.cloneNode(true) as HTMLElement;
  const renderer = renderWrapper(cloneComponent);
  const newRoot = renderer(root, state);

  console.log({ renderer, newRoot });

  return newRoot;
};
