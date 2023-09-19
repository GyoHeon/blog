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

interface IResumeWork {
  title: string;
  date: string;
  description: string;
  stack: string[];
  link?: string;
  works: {
    title: string;
    date: string;
    description: string;
    values: string[];
  }[];
}

type TPost = "posts" | "memos";
