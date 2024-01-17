import { getPostBySlug } from "./mdx";

interface Props {
  params: {
    slug: string;
  };
  type: TPost;
}

export async function generateMetadataFromPost({ params: { slug }, type }: Props) {
  const { meta } = await getPostBySlug(`${type}/` + slug);

  return parseMetadata(meta);
}

const parseMetadata = (meta: IMetaData) => ({
  title: meta.title,
  description: meta.description,
  openGraph: {
    images: meta.image,
    description: meta.description,
    type: "article",
  },
});
