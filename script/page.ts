export default (container: HTMLElement) => {
  const home = () => {
    container.textContent = "This is home page";
  };

  const list = () => {
    container.textContent = "This is list page";
  };

  const detail = (params: any) => {
    const { id } = params;
    container.textContent = `This is detail page with id ${id}`;
  };

  const anotherDetail = (params: any) => {
    const { id, anotherId } = params;
    container.textContent = `This is another detail page with id ${id} and anotherId ${anotherId}`;
  };

  const notFound = () => {
    container.textContent = "404 Not Found";
  };

  return { home, list, detail, anotherDetail, notFound };
};
