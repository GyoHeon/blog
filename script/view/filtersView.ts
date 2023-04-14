const filtersView = (targetElement: HTMLElement, { currentFilter }: { currentFilter: string }) => {
  const newCounter = targetElement.cloneNode(true) as HTMLElement;

  Array.from(newCounter.querySelectorAll("li a")).forEach((a: Element) => {
    if (a.textContent === currentFilter) a.classList.add("selected");
    else a.classList.remove("selected");
  });

  return newCounter;
};

export default filtersView;
