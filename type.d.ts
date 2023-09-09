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

type TPost = "posts" | "memos";
