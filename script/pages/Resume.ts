const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>

  <h2>Resume</h2>
  <app-card
    imgSrc="/image/lgh.png"
    title="안녕하세요! 이교헌입니다."
    desc="
    성능 향상에 큰 관심을 가진 개발자 이교헌입니다.
    </br>
    프로젝트의 Lighthouse Performance 점수를 26점 향상시키고 초기 번들 사이즈를 70% 감소시킨 경험이 있습니다.
    </br>
    개인 및 팀 성장에 대한 관심이 높으며, 비즈니스에 긍정적인 영향을 미치는 개발자가 되기 위해 노력하고 있습니다."
  >
  </app-card>
  <app-card></app-card>
  <app-card></app-card>
  `;

const Resume = (container: HTMLElement) => {
  container.replaceChildren(template.content.cloneNode(true));
};

export default Resume;
