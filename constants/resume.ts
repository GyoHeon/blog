export const RESUME_HEAD = {
  name: "이교헌",
  title: "About Me",
  description: `꾸준히 노력하는 프론트엔드 엔지니어 이교헌입니다.

  여러 활동에서 적극적으로 팀장을 맡아온 경험이 있으며 조직내 소통을 이끌어내며 프로젝트를 성공시키는 것을 즐깁니다.
  비즈니스에 긍정적인 영향을 미치는 개발자가 되기 위해 오늘도 끊임없이 노력하고 있습니다.`,
  image: "/image/lgh.png",
  information: [
    { title: "Phone", value: "010-9978-9874" },
    { title: "Email", value: "ghl12078@gmail.com" },
    { title: "GitHub", value: "https://github.com/GyoHeon" },
    { title: "Blog", value: "https://gyoheon.com" },
  ],
};

export const RESUME_SKILLS = {
  title: "Skills",

  skills: ["React", "TypeScript", "Next", "emotion", "tailwind"],
};

export const RESUME_WORKS: IResumeWork[] = [
  {
    title: "교보문고 DT",
    date: "2023.07 ~ 재직중",
    description: "교보문고 DT추진실 크로스플랫폼팀 / FE 개발자",
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
    description: "뮤즈라이브 / FE 개발 & Infra",
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
    description: "뭉클 / FE 개발",
    link: "https://moonkl.com",
    stack: ["Next", "tailwind", "TypeScript"],
    works: [
      {
        title: "뭉클 메인 페이지 신규 개발",
        date: "2023.04 ~ 진행중",
        description: "뭉클의 웹 사이트를 신규 개발하였습니다. (기여도 100%)",
        values: [
          "Next.js 13 App routing을 사용하여 SSR 구현",
          "monorepo를 구성하여 landing, main 두 개의 웹 프로젝트를 효율적으로 관리",
        ],
      },
    ],
  },
  {
    title: "Blog",
    date: "2023.05 ~ 진행중",
    description: "파일 시스템 기반 개인 블로그",
    link: "https://gyoheon.com",
    stack: ["Next", "tailwind", "TypeScript"],
    works: [
      {
        title: "파일 시스템 기반 개인 블로그",
        date: "2023.05 ~ 진행중",
        description: "",
        values: ["Next.js 13 App routing을 사용하여 SSR 구현", "generateMetadata를 사용하여 메타데이터 자동 생성"],
      },
    ],
  },
  {
    title: "SYSMETIC (외주)",
    date: "2021.12 ~ 2022.02",
    description: "시스메틱 외주 / 총괄 팀장",
    stack: ["React", "emotion", "D3"],
    works: [
      {
        title: "Moya for Desktop",
        date: "2021.12 ~ 2022.02",
        description:
          "주식회사 SYSMETIC의 뉴스와 주가의 상관관계를 분석하여 제공하는 앱 Moya의 프론트엔드 데모 버전입니다.",
        values: [
          "프로젝트의 총괄 팀장을 맡아 개발자, 디자이너, SYSMETIC 사와의 모든 소통을 주도",
          "D3을 사용하여 chart 구현",
        ],
      },
    ],
  },
];

export const RESUME_ACTIVITIES: IResumeProject[] = [
  {
    title: "오픈소스 기여 - mdn 한글 번역",
    date: "2023.06 ~ 진행중",
    description: "mdn 한글 번역에 기여",
    link: "https://github.com/mdn/translated-content/pulls?q=is%3Apr+author%3AGyoHeon",
    values: ["mdn에 한글 번역 문서를 추가하고 있습니다."],
  },
  {
    title: "패스트캠퍼스 프론트엔드 과정 멘토",
    date: "2022.10 ~ 2023.10",
    description: "패스트캠퍼스 프론트엔드 과정 멘토 활동",
    values: ["패스트캠퍼스 프론트엔드 부트캠프에서 멘토로 활동", "수강생 리뷰에서 긍정적인 평가(4.7/5)를 받음"],
  },
  {
    title: "Hello, Megabyte 해커톤 최우수상",
    date: "2022.02",
    description: "팀을 구성하여 해커톤에 참가, 최우수상을 수상.",
    values: [
      "해커톤 팀장으로 참여하여 아이디어 결정 및 프로젝트를 주도하여 최우수상 수상",
      "특정 지역 내 채용 공고 확인 기능 프로젝트 구현",
      "위치 확인이 쉽도록 하는 반응형 지도 개발 관련 개발을 담당하여 반응형 지도 구현",
      "회사명을 통해 주소 및 GPS 좌표 확인 후 실제 위치 표시",
    ],
  },
  {
    title: "서울시립대학교 빅데이터 연계경진대회 동상",
    date: "2020.12",
    description: "교내 빅데이터 경진대회에 팀으로 참가, 동상을 수상",
    values: [
      "교내 빅데이터 연계 경진대회에서 코로나 관련 머신러닝 분석 및 시각화 수행",
      "개인 역할로 데이터 전처리 및 시각화 작업을 담당",
    ],
  },
];

export const RESUME_ETC = {
  title: "ETC",
  values: [
    { title: "학력", content: ["서울시립대학교 물리학과"] },
    { title: "자격증", content: ["OPIC - IM1"] },
  ],
};
