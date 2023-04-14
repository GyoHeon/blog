interface IRegistry {
  [key: string]: Function;
}

const registry: IRegistry = {};

const renderWrapper: Function = (component: Function) => {
  const result = (targetElement: Element, state: any, events: any) => {
    const element: HTMLElement = component(targetElement, state, events);

    const childComponents = element.querySelectorAll<HTMLElement>("[data-component]");

    Array.from(childComponents).forEach((target: HTMLElement) => {
      const name = target.dataset.component;

      const child = registry[name || ""] || false;
      if (!child) return;

      target.replaceWith(child(target, state, events));
    });

    return element;
  };

  return result;
};

export const add = (name: string, component: Function) => (registry[name] = renderWrapper(component));

export const renderRoot = (root: HTMLElement, state: any, events: any) => {
  const cloneComponent = (root: Element) => root.cloneNode(true) as HTMLElement;
  const renderer = renderWrapper(cloneComponent);
  const newRoot = renderer(root, state, events);

  return newRoot;
};
