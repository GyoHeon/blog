import AppCard from "../components/Card";

const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>

  <h2>Posts</h2>
  <app-card></app-card>
  <app-card></app-card>
  `;

customElements.get("app-card") || customElements.define("app-card", AppCard);

const Posts = (container: HTMLElement) => {
  container.replaceChildren(template.content.cloneNode(true));
};

export default Posts;
