export const RESUME_HEAD = {
  name: "이교헌",
  title: "About Me",
  description: `꾸준히 UX를 개선시키기 위해 노력하는 프론트엔드 엔지니어 이교헌 입니다.
  프로덕트의 웹 성능 점수를 45점 향상시키고 초기 번들 사이즈를 70% 감소시킨 경험이 있습니다.
  성능 최적화에 대한 전문적인 지식과 경험을 바탕으로 서비스의 성능을 향상 시키는데 주력합니다.
  
  여러 활동에서 적극적으로 팀장을 맡아온 경험을 바탕으로 조직내 소통을 이끌어내며 프로젝트를 성공시키는 것을 즐깁니다.
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
      stack: ["Next", "React", "TypeScript", "storybook", "vite", "zustand", "tailwind", "Turborepo", "pnpm"],
      works: [
        {
          title: "업무",
          values: [
            "Storybook을 적용하여 범용적인 컴포넌트 개발 및 UI 화면 테스트 가능하도록 개발",
            "신사업 팀의 원활한 협업을 위한 프로젝트 컨벤션과 모듈화 정립",
            "JSP를 사용하는 회사 특성상 HTML에 다수의 react-root를 생성할 수 있도록 하는 모듈 개발",
            "JSP -> React로 마이그레이션과 동시에 점진적으로 레거시 코드 개선",
            "서비스의 완성도를 높이기 위해 주도적으로 개선할 사항을 찾아 의견 제시",
          ],
        },
      ],
    },
    {
      title: "뮤즈라이브",
      date: "2022.04 ~ 2023.07",
      description: "뮤즈라이브 / FE 개발 & Infra",
      link: "https://kitbetter.com/community/discover",
      stack: ["Next", "React", "TypeScript", "emotion", "zustand", "SWR", "AWS"],
      works: [
        {
          title: "키트 커뮤니티 프론트 개발",
          description: "키트 커뮤니티의 선임 개발을 담당했습니다. (기여도 70%)",
          values: [
            "JS -> TS로 점진적으로 마이그레이션하여 안정성 높은 코드 구성",
            "기존 46개의 라이브러리를 직접 구현하여 20개로 감소",
            "성능 최적화할 수 있는 여러 방법을 동원하여 500kB에 달하는 번들 사이즈를 70% 감소",
            "좋은 UX 제공을 위해 프로덕트 성능 점수 39점 -> 84점으로 향상",
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
      stack: ["Next", "React", "TypeScript", "tailwind", "zustand", "Turborepo", "yarn"],
      works: [
        {
          title: "업무",
          description: "뭉클의 웹 사이트를 신규 개발하였습니다.",
          values: [
            "FE 1인 개발을 해왔으며 업데이트된 Next.js 13 버전으로 개발",
            "Next.js 13의 신규 기능인 App routing과 React 18의 신규 기능인 RSC 적용",
            "각 페이지 목적에 중점을 두어 SSR, SSG, ISR를 적절하게 사용하여 개발",
            "monorepo로 구성하여 분리되어 있는 프로젝트를 단일로 효율적으로 관리",
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
          values: [
            "Next.js 13의 신규 기능인 App routing과 React 18의 신규 기능인 RSC를 적용하여 SSR 구현",
            "generateMetadata를 사용하여 메타데이터 자동 생성",
          ],
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
          values: [
            "(주)SYSMETIC의 뉴스와 주가의 상관관계를 분석하여 제공하는 앱 Moya의 프론트엔드 데모 버전을 개발",
            "프로젝트의 총괄 팀장을 맡아 개발자, 디자이너, SYSMETIC 사와의 모든 소통을 주도하여 좋은 팀워크 형성",
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
      title: "MDN 오픈소스 기여",
      date: "2023.06 ~ 진행중",
      link: "https://github.com/mdn/translated-content/pulls?q=is%3Apr+author%3AGyoHeon",
      values: ["mdn에 한글 번역 문서를 추가하고 있습니다."],
    },
    {
      title: "패스트캠퍼스 FE 전문 멘토",
      date: "2022.10 ~ 2023.10",
      values: [
        "부트캠프 수강생들의 코드 리뷰와 기술적 질의응답 등 개발에 대한 피드백을 제공",
        "수강생들 사이에서 긍정적인 평가(4.7/5.0)를 획득",
      ],
    },
    {
      title: "Hello, Megabyte 해커톤 최우수상",
      date: "2022.02",
      link: "https://github.com/megabyte-hackathon/megabyte-hackathon-front",
      values: [
        "해커톤 팀장으로 참여하여 아이디어 결정 및 프로젝트를 주도하여 최우수상 수상",
        "특정 지역 내 채용 공고 확인 기능 프로젝트 개발",
        "회사명을 통해 주소 및 GPS 좌표 확인 후 실제 위치 표시",
        "다양한 디바이스 환경에 반응할 수 있도록 개발",
      ],
    },
    {
      title: "패스트캠퍼스 FE 부트캠프 수료",
      date: "2021.11 ~ 2022.03",
      values: [
        "개발의 기본적인 CS 소양을 갖추고 웹  FE개발 과정인 HTML, CSS, JS, TS, React, Recoil 의 기술을 터득하여, 팀 프로젝트를 A to Z까지 기획 및 설계하고 FE개발까지 경험하며 많은 것을 배울 수 있었습니다.",
        "수료 이후 우수 수료생으로 발탁되어 현재 패스트캠퍼스 멘토링 활동까지 활약을 이어가고 있습니다.",
      ],
    },
    {
      title: "서울시립대학교 빅데이터 연계경진대회 동상",
      date: "2020.12",
      values: [
        "교내 빅데이터 연계 경진대회에서 코로나 관련 머신러닝 분석 및 시각화를 통해 동상 수상",
        "데이터 전처리 및 시각화 작업 담당",
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
