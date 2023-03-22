import { marked } from "marked";
const app = document.querySelector("div#app");
app.innerHTML = marked.parse("#title");
