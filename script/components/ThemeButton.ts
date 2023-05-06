import { setTheme } from "../util/themeToggle";

interface AppCardProps {
  mobile?: Attr;
}

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .theme-label {
      display: inline-flex;
      align-items: center;
      background: var(--bg--sec);
      border-radius: 15px;
      cursor: pointer;
    }
    .theme-toggle {
      isolation: isolate;
      position: relative;
      height: 30px;
      width: 60px;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: var(--neumo), var(--neumo-reverse);
    }
    .theme-state {
      display: none;
    }
    .theme-indicator {
      height: 100%;
      width: 200%;
      background: var(--bg);
      border-radius: 15px;
      transform: translate3d(-75%, 0, 0);
      transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
      box-shadow: var(--neumo);
    }
    .theme-state:checked ~ .theme-indicator {
      transform: translate3d(25%, 0, 0);
    }
  </style>

  <label class="theme-label">
    <div class="theme-toggle">
      <input class="theme-state" type="checkbox" name="check" value="check">
      <div class="theme-indicator"></div>
    </div>
  </label>
  `;

class ThemeButton extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.appendChild(template.content.cloneNode(true));

      const themeButton = this.querySelector(".theme-state") as HTMLInputElement;
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
