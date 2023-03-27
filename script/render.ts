const registry = {
  test: "test",
};

export const renderWrapper = (component: any) => {
  return (targetElement: HTMLElement, state: object) => {
    const element = component(targetElement, state);

    const childComponents: HTMLElement[] =
      element.querySelectorAll("[data-component]");

    Array.from(childComponents).forEach((target: HTMLElement) => {
      const name = target.dataset.component;
      if (name === undefined) return;

      const child = registry[name];
      if (!child) return;

      target.replaceWith(child(target, state));
    });
  };
};

const add = (name: string, component: HTMLElement) => {
  registry[name] = renderWrapper(component);
};
