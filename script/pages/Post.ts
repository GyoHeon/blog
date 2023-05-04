const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>

  <h2>Post</h2>
  <app-card></app-card>
  <app-card></app-card>
  `;

const Post = (container: HTMLElement, slug: string) => {
  container.replaceChildren(template.content.cloneNode(true));
};

export default Post;
