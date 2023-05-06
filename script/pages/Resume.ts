const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>

  <h2>Resume</h2>
  <app-card></app-card>
  <app-card></app-card>
  `;

const Resume = (container: HTMLElement) => {
  container.replaceChildren(template.content.cloneNode(true));
};

export default Resume;
