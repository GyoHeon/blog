const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>

  <h2>Posts</h2>
  <app-card></app-card>
  <app-card></app-card>
  `;

const Posts = (container: HTMLElement) => {
  container.replaceChildren(template.content.cloneNode(true));
};

export default Posts;
