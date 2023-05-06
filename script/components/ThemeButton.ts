import { setTheme } from "../util/themeToggle";

interface AppCardProps {
  mobile?: Attr;
}

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .label {
      display: inline-flex;
      align-items: center;
      background: var(--bg--sec);
      border-radius: 15px;
      cursor: pointer;
    }
    .label-text {
      margin-left: 16px;
    }
    .toggle {
      isolation: isolate;
      position: relative;
      height: 30px;
      width: 60px;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: var(--neumo), var(--neumo-reverse);
    }
    .toggle-state {
      display: none;
    }
    .indicator {
      height: 100%;
      width: 200%;
      background: var(--bg);
      border-radius: 15px;
      transform: translate3d(-75%, 0, 0);
      transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
      box-shadow: var(--neumo);
    }
    .toggle-state:checked ~ .indicator {
      transform: translate3d(25%, 0, 0);
    }
  </style>

  <label class="label">
    <div class="toggle">
      <input class="toggle-state" type="checkbox" name="check" value="check">
      <div class="indicator"></div>
    </div>
  </label>
  `;

class ThemeButton extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.appendChild(template.content.cloneNode(true));

      const themeButton = this.querySelector(".toggle-state") as HTMLInputElement;
      const colorTheme = localStorage.getItem("theme") || "dark";

      if (colorTheme) {
        document.documentElement.className = colorTheme;
        themeButton.checked = colorTheme === "dark";
        this.classList.add(colorTheme);
      } else {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          localStorage.setItem("theme", "dark");
        } else {
          localStorage.setItem("theme", "light");
        }
      }

      themeButton.addEventListener("click", () => {
        const theme = document.documentElement.className === "light" ? "dark" : "light";
        console.log({ theme });
        setTheme(theme);
        localStorage.setItem("theme", theme);
      });
    });
  }
}

export default ThemeButton;
