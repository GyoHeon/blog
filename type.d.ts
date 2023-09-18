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

type TPost = "posts" | "memos";
