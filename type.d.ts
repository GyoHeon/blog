interface IMetaData {
  title: string;
  date: string;
  description: string;
  slug: string;
  tags: string;
  image: string;
}

interface IBlogPost {
  meta: IMetaData;
  content: ReactElement;
}

type TPost = "posts" | "memos" | "all";
