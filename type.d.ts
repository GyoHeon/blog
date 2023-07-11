type MetaData = {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string;
  image: string;
};

type BlogPost = {
  meta: MetaData;
  content: ReactElement;
};

type PostType = "posts" | "memos" | "all";
