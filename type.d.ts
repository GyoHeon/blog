interface IMemoMetaData {
  title: string;
  date: string;
  description: string;
  slug: string;
  tags: string;
}

interface IMetaData extends IMemoMetaData {
  image: string;
}

interface IBlogPost {
  meta: IMetaData;
  content: ReactElement;
}

interface IPostSearchParams {
  searchParams: { page: string };
}

interface IResumeActivities {
  title: string;
  projects: {
    title: string;
    date: string;
    description: string;
    link?: string;
    values: string[];
  }[];
}

interface IResumeProjects {
  title: string;
  projects: {
    title: string;
    date: string;
    description: string;
    stack: string[];
    link?: string;
    works: {
      title: string;
      description: string;
      values: string[];
    }[];
  }[];
}

type TPost = "posts" | "memos";
