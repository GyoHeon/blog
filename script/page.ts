export default (container: HTMLElement) => {
  const home = () => {
    container.textContent = "This is home page";
  };

  const post = (params: any) => {
    const { slug } = params;
    container.textContent = "This is post page with slug: " + slug;
  };

  const posts = () => {
    container.innerHTML = `
    <a data-navigation href='/posts/1'>This is list page</a>`;
  };

  const resume = () => {
    container.textContent = `This is resume page`;
  };

  const portfolio = () => {
    container.textContent = `This is portfolio page`;
  };

  const memo = () => {
    container.textContent = `This is memo page`;
  };

  const notFound = () => {
    container.textContent = "404 Not Found";
  };

  return { home, post, posts, resume, portfolio, memo, notFound };
};
