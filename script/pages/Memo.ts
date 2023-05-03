const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>

  <h2>Memo</h2>
  <app-card></app-card>
  <app-card></app-card>
  `;

const Memo = (container: HTMLElement) => {
  container.replaceChildren(template.content.cloneNode(true));
};

export default Memo;
