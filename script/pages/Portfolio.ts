const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>

  <h2>Portfolio</h2>
  <app-card></app-card>
  <app-card></app-card>
  `;

const Portfolio = (container: HTMLElement) => {
  container.replaceChildren(template.content.cloneNode(true));
};

export default Portfolio;
