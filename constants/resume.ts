export const RESUME_HEAD = {
  name: "이교헌",
  description: `꾸준히 노력하는 개발자 이교헌입니다.
  
  개인 및 팀 성장에 관심이 높으며, 비지니스에 긍정적인 영향을 미치는 개발자가 되기 위해 노력하고 있습니다.`,
  image: "/image/lgh.png",
  information: [
    { title: "Phone", value: "010-9978-9874" },
    { title: "Email", value: "ghl12078@gmail.com" },
    { title: "GitHub", value: "https://github.com/GyoHeon" },
    { title: "Blog", value: "https://gyoheon.com" },
  ],
};

export const RESUME_WORKS: IResumeWork[] = [
  {
    title: "교보문고 DT",
    date: "2023.07 ~ 재직중",
    description: "교보문고의 DT 팀에서 프론트엔드 개발자로 근무하고 있습니다.",
    stack: ["React", "TypeScript", "Storybook"],
    works: [
      {
        title: "디자인 시스템 구축",
        date: "2023.07 ~ 진행중",
        description: "교보문고의 디자인 시스템을 구축하고 있습니다.",
        values: ["Storybook을 활용하여 디자인 시스템을 구축"],
      },
      {
        title: "레거시 코드 최신화",
        date: "2023.07 ~ 2023.09",
        description: "교보문고 레거시 코드의 최신화를 진행했습니다",
        values: [
          "기존의 jQuery를 전부 react 컴포넌트로 변환",
          "Thymeleaf를 사용하는 회사 특성상 HTML에 다수의 react-root를 생성할 수 있도록 하는 공통 함수 개발",
        ],
      },
    ],
  },
  {
    title: "뮤즈라이브",
    date: "2022.04 ~ 2023.07",
    description: "KiT 앨범 사용자를 대상으로 한 커뮤니티입니다.",
    link: "https://kitbetter.com/community/discover",
    stack: ["React", "Next", "emotion", "TypeScript"],
    works: [
      {
        title: "릴리즈 상태의 불안정성 해소",
        date: "2022.04 ~ 2023.07",
        description: "로컬 코드를 바로 릴리즈로 배포하는 기존 프론트 환경을 개선하였습니다.",
        values: [
          "JavaScript를 TypeScript로 100% 마이그레이션하여 컴파일 과정에서 에러를 잡아낼 수 있는 환경 구성",
          "테스트 서버를 구성하고 배포하여 QA와 구동 환경 테스트를 실시",
        ],
      },
      {
        title: "프로젝트 성능 개선",
        date: "2022.04 ~ 2023.07",
        description: "기존 프로젝트의 성능 향상을 이끌었습니다.",
        values: [
          "불필요한 라이브러리를 직접 구현하여 기존 46개의 라이브러리를 20개로 감소",
          "500kB에 달하는 번들 사이즈를 70% 감소",
          "꾸준한 성능 개선으로 lighthouse 점수 향상 (65->83)",
        ],
      },
      {
        title: "프론트엔드 배포환경 구성",
        date: "2022.08 ~ 2023.02",
        description: "AWS 프론트엔드 배포환경을 구성했습니다.",
        values: [
          "BitBucket의 pipeline과 AWS의 CodeDeploy를 통해 CI/CD 구성",
          "테스트 서버와 릴리즈 서버에 각각 2개의 서비스를 배포",
        ],
      },
    ],
  },
];

export const RESUME_OTHER_PROJECTS: IResumeWork[] = [
  {
    title: "뭉클",
    date: "2023.04 ~ 진행중",
    description: "뭉클은 온라인 그룹 상담을 제공하는 서비스입니다.",
    link: "https://moonkl.com",
    stack: ["Next", "tailwind", "TypeScript"],
    works: [
      {
        title: "뭉클 메인 페이지 신규 개발",
        date: "2023.04 ~ 진행중",
        description: "뭉클의 메인 페이지를 신규 개발하였습니다. (기여도 100%)",
        values: ["Next.js 13 App routing을 사용하여 SSR 구현", "tailwind를 사용하여 스타일링"],
      },
    ],
  },
  {
    title: "SYSMETIC",
    date: "2021.12 ~ 2022.02",
    description: "뭉클은 온라인 그룹 상담을 제공하는 서비스입니다.",
    stack: ["Next", "tailwind", "TypeScript"],
    works: [
      {
        title: "Moya for Desktop",
        date: "2021.12 ~ 2022.02",
        description: "시스메틱사와의",
        values: ["D3을 사용하여 chart 구현", "tailwind를 사용하여 스타일링"],
      },
    ],
  },
];

export const RESUME_ACTIVITIES: IResumeProject[] = [
  {
    title: "오픈소스 기여-mdn 한글 번역",
    date: "2023.06 ~ 진행중",
    description: "mdn의 한글 번역에 기여하였습니다.",
    link: "https://github.com/mdn/translated-content/pulls?q=is%3Apr+author%3AGyoHeon",
    values: ["mdn에 한글 번역 문서를 추가하고 있습니다."],
  },
  {
    title: "패스트캠퍼스 프론트엔드 과정 멘토",
    date: "2022.10 ~ 진행중",
    description: "패스트캠퍼스 프론트엔드 과정에서 멘토로 활동하였습니다",
    values: [
      "패스트캠퍼스 프론트엔드 부트캠프에서 코드 리뷰 멘토로 활동하여 수강생들의 코드 리뷰 진행",
      "수강생 리뷰에서 긍정적인 평가를 받아 이후 담당 멘토로 활동",
    ],
  },
  {
    title: "Hello, Megabyte 해커톤 최우수상",
    date: "2022.02",
    description: "팀을 구성하여 해커톤에 참가, 최우수상을 수상하였습니다.",
    values: [
      "해커톤 팀장으로 아이디어 결정 및 프로젝트를 주도하여 최우수상 수상",
      "특정 지역 내 채용 공고 확인 기능 프로젝트 구현",
      "지도 관련 개발을 담당하여 반응형 지도 구현",
      "회사명을 통해 주소 및 GPS 좌표 확인 후 실제 위치 표시",
      "위치 확인이 쉽도록 하는 반응형 지도 개발",
    ],
  },
  {
    title: "서울시립대학교 빅데이터 연계경진대회 동상",
    date: "2020.12",
    description: "교내 빅데이터 경진대회에 팀으로 참가 동상을 수상하였습니다.",
    values: [
      "교내 빅데이터 연계 경진대회에서 코로나 관련 머신러닝 분석 및 시각화 수행",
      "개인 역할로 데이터 전처리 및 시각화 작업을 담당",
    ],
  },
];

export const RESUME_ETC = [
  { title: "학력", values: ["서울시립대학교 물리학과"] },
  { title: "자격증", values: ["OPIC - IM1"] },
];
