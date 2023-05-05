interface AppCardProps {
  mobile?: Attr;
}

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .lgh {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 300px;
      margin: 2rem 1rem 1rem;
      padding: 20px;
      border-radius: 0.5rem;
      box-shadow: var(--neumo-reverse);
      overflow: hidden;
      line-height: 1.2;
    }
    .lgh > img {
      z-index: -1;
      border-radius: 0.5rem;
      margin: -10px -10px 10px;
    }
    .lgh strong {
      color: var(--blue);
    }
    @media (max-width: 767px) {
      .lgh {
        position: absolute;
        transform: translateX(-100%);
      }
    }
  </style>

  <aside class="lgh">
    <img src="/image/lgh.png" width="280"  object-fit="cover" />
    <h5>
      안녕하세요!
      </br>
      <strong>이교헌</strong> 입니다!
    </h4>
    <p>
      성능 향상에 큰 관심을 가진 개발자 이교헌입니다.
      </br>
      프로젝트의 Lighthouse Performance 점수를 26점 향상시키고 초기 번들 사이즈를 70% 감소시킨 경험이 있습니다.
      </br>
    </p>
  </aside>
  `;

class LGH extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      const { mobile } = this.attributes as any as AppCardProps;
      this.appendChild(template.content.cloneNode(true));
    });
  }
}

export default LGH;
