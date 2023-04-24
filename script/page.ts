export default (container: HTMLElement) => {
  const home = () => {
    container.textContent = "This is home page";
  };

  const list = () => {
    container.textContent = "This is list page";
  };

  const notFound = () => {
    container.textContent = "404 Not Found";
  };

  return { home, list, notFound };
};
