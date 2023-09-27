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
  title: "기술 스택",
  skills: ["React", "Next", "TypeScript", "emotion", "tailwind", "AWS"],
};

export const RESUME_WORKS: IResumeProjects = {
  title: "경력",
  projects: [
    {
      title: "교보문고 DT추진실",
      date: "2023.07 ~ 재직중",
      description: "크로스플랫폼팀 / FE 개발자",
      stack: ["React", "TypeScript", "Storybook"],
      works: [
        {
          title: "교보문고 신규 서비스 및 기존 서비스 개선",
          // TODO: Make description hidden
          description: "교보문고 레거시 코드의 최신화를 진행했습니다",
          values: [
            "Storybook을 적용하여 범용적인 컴포넌트 개발 및 UI 화면 테스트 가능하도록 개발",
            // "기존의 jQuery를 전부 react로 전환",
            "JSP를 사용하는 회사 특성상 HTML에 다수의 react-root를 생성할 수 있도록 하는 공통 함수 개발",
            "신사업 팀의 원활한 협업을 위한 프로젝트 컨벤션과 모듈화 정립",
            "JSP -> React로 마이그레이션과 동시에 레거시 코드 개선",
          ],
        },
      ],
    },
    {
      title: "뮤즈라이브",
      date: "2022.04 ~ 2023.07",
      description: "뮤즈라이브 / FE 개발 & Infra",
      link: "https://kitbetter.com/community/discover",
      stack: ["React", "Next", "emotion", "TypeScript", "AWS"],
      works: [
        {
          title: "키트 커뮤니티 프론트 개발",
          description: "키트 커뮤니티의 선임 개발을 담당했습니다. (기여도 70%)",
          values: [
            "JS -> TS로 점진적으로 마이그레이션하여 안정성 높은 코드 구성",
            "기존 46개의 라이브러리를 직접 구현하여 20개로 감소",
            "성능 최적화할 수 있는 여러 방법을 동원하여 500kB에 달하는 번들 사이즈를 70% 감소",
            "좋은 UX 제공을 위해 프로덕트 성능 점수 65점 -> 83점으로 향상",
            "PC, Mobile, 웹뷰 등 다양한 환경에 맞게 개발",
            "다국적 서비스 운영을 위해 SEO를 고려하여 SSR로 개발 시 i18n 적용",
            "커뮤니티 피드 게시물 무한 스크롤로 불러오기",
          ],
        },
        {
          title: "FE 인프라",
          description: "프론트엔드 배포 환경을 구축 및 개선하였습니다.",
          values: [
            "AWS 프론트엔드 아키텍처 구성 및 구축",
            "단일 서버에 웹, 웹뷰 2개의 서비스를 배포",
            "테스트 서버를 구성하여 QA와 구동 환경 분리",
          ],
        },
      ],
    },
  ],
};

export const RESUME_OTHER_PROJECTS: IResumeProjects = {
  title: "사이드 프로젝트",
  projects: [
    {
      title: "뭉클",
      date: "2023.04 ~ 진행중",
      description: "뭉클 / FE 개발",
      link: "https://moonkl.com",
      stack: ["Next", "tailwind", "TypeScript"],
      works: [
        {
          title: "업무",
          description: "뭉클의 웹 사이트를 신규 개발하였습니다. (기여도 100%)",
          values: [
            "FE 1인 개발을 해왔으며 Next.js 13 신규 버전으로 프로덕트 개발",
            "Next.js 13의 신규 기능인 App routing과 React 18의 신규 기능인 RSC를 적용하여 SSR 구현",
            "monorepo로 구성하여 여러 웹 프로젝트를 단일로 효율적으로 관리",
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
          description:
            "주식회사 SYSMETIC의 뉴스와 주가의 상관관계를 분석하여 제공하는 앱 Moya의 프론트엔드 데모 버전입니다.",
          values: [
            "프로젝트의 총괄 팀장을 맡아 개발자, 디자이너, SYSMETIC 사와의 모든 소통을 주도",
            "D3.js 사용하여 Chart 데이터 시각화",
          ],
        },
      ],
    },
  ],
};

export const RESUME_ACTIVITIES: IResumeActivities = {
  title: "기타 활동",
  projects: [
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
  ],
};

export const RESUME_ETC = {
  title: "학력 및 자격증",
  values: [
    { title: "학력", content: ["서울시립대학교 물리학과"] },
    { title: "자격증", content: ["OPIC - IM1"] },
  ],
};
