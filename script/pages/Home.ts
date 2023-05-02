import AppCard from "../components/Card";

const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>

  <h2>Home</h2>
  <app-card></app-card>
  <app-card></app-card>
  `;

customElements.get("app-card") || customElements.define("app-card", AppCard);

export default function Home(container: HTMLElement) {
  container.replaceChildren(template.content.cloneNode(true));
}
