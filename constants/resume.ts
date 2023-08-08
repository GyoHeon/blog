export const RESUME_HEAD = {
  name: "이교헌",
  description: `성능향상에 큰 관심이 있는 개발자 이교헌입니다.
  실제 프로젝트의 Lighthouse 점수를 26점 향상시키고 번들 사이즈를 70% 감소시킨 경험이 있습니다.
  
  개인 및 팀 성장에 관심이 높으며, 비지니스에 긍정적인 영향을 미치는 개발자가 되기 위해 노력하고 있습니다.`,
  image: "/image/lgh.png",
  information: [
    { title: "Phone", value: "010-9978-9874" },
    { title: "Email", value: "ghl12078@gmail.com" },
    { title: "GitHub", value: "https://github.com/GyoHeon" },
    { title: "Blog", value: "https://gyoheon.com" },
    { title: "Portfolio", value: "https://gyoheon.com" },
  ],
};

export const RESUME_WORKS = [
  {
    title: "교보문고 DT",
    date: "2023.07 ~ 재직중",
    description: "교보문고의 DT 팀에서 프론트엔드 개발자로 근무하고 있습니다.",
    stack: ["React"],
    works: [],
  },
  {
    title: "뮤즈라이브",
    date: "2022.04 ~ 2023.07",
    description: "KiT 앨범 사용자를 대상으로 한 커뮤니티입니다.",
    stack: ["React", "Next", "emotion", "TypeScript"],
    works: [
      {
        title: "프로젝트 개발",
        date: "2022.04 ~ 2023.07",
        description: "메인 프론트엔드 개발자로 프로젝트 구조 설계 및 각종 컴포넌트 개발 (기여도 60%)",
        value: [],
      },
      {
        title: "프로젝트 성능 개선",
        date: "2022.04 ~ 2023.07",
        description: "기존 프로젝트의 성능 향상을 이끌었습니다.",
        value: ["500kB에 달하는 번들 사이즈를 70% 감소", "꾸준한 성능 개선으로 lighthouse 점수 향상"],
      },
      {
        title: "배포 환경 구성 및 불안정성 해소",
        date: "2022.08 ~ 2023.02",
        description: `기존 프로젝트의 구조는 로컬 코드를 push하면 바로 릴리즈로 배포하는 방식으로 운영되었습니다.
        이로 인해 코드의 오류가 즉시 서비스에 노출되는 문제가 발생했습니다.
        이 문제를 해결하기 위해 해당 프로젝트의 아키텍처를 수정하였습니다.`,
        value: [],
      },
      {
        title: "유닛 테스트 구성",
        date: "2023.02 ~ 2023.07",
        description: "프로젝트의 불안정성을 해소하기 위해 테스트를 도입하였습니다.",
        value: [],
      },
    ],
  },
];

export const RESUME_OTHER_PROJECTS = [
  {
    title: "뭉클",
    date: "2023.04 ~ 진행중",
    description: "뭉클은 온라인 그룹 상담을 제공하는 서비스입니다.",
    stack: ["Next", "tailwind", "TypeScript"],
    works: [
      {
        title: "뭉클 메인 페이지 신규 개발",
        date: "2023.04 ~ 진행중",
        description: "뭉클의 메인 페이지를 신규 개발하였습니다. (기여도 100%)",
        value: [],
      },
    ],
  },
];

export const RESUME_ACTIVITIES = [
  {
    title: "오픈소스 기여",
    date: "2023.06 ~ 진행중",
    description: "mdn의 한글 번역에 기여하였습니다.",
    value: [],
  },
  {
    title: "패스트캠퍼스 프론트엔드 과정 멘토",
    date: "2022.10 ~ 진행중",
    description: "패스트캠퍼스 프론트엔드 과정에서 멘토로 활동하였습니다",
    value: [],
  },
  {
    title: "Hello, Megabyte 해커톤 최우수상",
    date: "2022.02",
    description: "팀을 구성하여 해커톤에 참가, 최우수상을 수상하였습니다.",
    value: [],
  },
  {
    title: "서울시립대학교 빅데이터 연계경진대회 동상",
    date: "2020.12",
    description: "교내 빅데이터 경진대회에 팀으로 참가혀 동상을 수상하였습니다.",
    value: [
      "교내 빅데이터 연계 경진대회에서 코로나 관련 머신러닝 분석 및 시각화 수행",
      "개인 역할로 데이터 전처리 및 시각화 작업을 담당",
    ],
  },
];

export const RESUME_ETC = [
  { title: "학력", value: ["서울시립대학교 물리학과"] },
  { title: "자격증", value: ["OPIC - IM1"] },
];
