const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>

  <h2>Home</h2>
  <app-card></app-card>
  `;

export default function Home(container: HTMLElement) {
  container.replaceChildren(template.content.cloneNode(true));
}
