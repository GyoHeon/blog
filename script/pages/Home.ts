const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>

  <h2>Home</h2>
  <app-card imgSrc="/image/lgh.png"></app-card>
  <app-card></app-card>
  `;

export default function Home(container: HTMLElement) {
  container.replaceChildren(template.content.cloneNode(true));
}
