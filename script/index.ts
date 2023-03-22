import { marked } from "marked";

const app = document.querySelector<HTMLDivElement>("div#app");

app!.innerHTML = marked.parse("# title");
