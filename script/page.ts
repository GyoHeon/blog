import Home from "./pages/Home";
import Memo from "./pages/Memo";
import Portfolio from "./pages/Portfolio";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Resume from "./pages/Resume";

export default (container: HTMLElement) => {
  const home = () => Home(container);

  const post = (params: any) => {
    const { slug } = params;
    Post(container);
  };

  const posts = () => {
    Posts(container);
  };

  const resume = () => {
    Resume(container);
  };

  const portfolio = () => {
    Portfolio(container);
  };

  const memo = () => {
    Memo(container);
  };

  const notFound = () => {
    container.textContent = "404 Not Found";
  };

  return { home, post, posts, resume, portfolio, memo, notFound };
};
