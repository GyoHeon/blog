import Link from "next/link";

interface PageLinkProps {
  page: number;
  isActive: boolean;
  postType: TPost;
}

function PageLink({ page, isActive = false, postType }: PageLinkProps) {
  const className = "px-1 rounded-full hover:bg-[--blue]" + (isActive ? " bg-[--blue-sec] bg-opacity-50" : "");

  return (
    <Link className={className} href={{ pathname: postType, query: { page } }}>
      {page}
    </Link>
  );
}

function setNumberList(maxPage: number, nowPage: number) {
  if (maxPage <= 9) {
    return Array.from({ length: maxPage }, (_, i) => i + 1);
  }
  if (nowPage <= 5) {
    return [1, 2, 3, 4, 5, "...", maxPage];
  }
  if (nowPage >= maxPage - 4) {
    return [1, "...", maxPage - 4, maxPage - 3, maxPage - 2, maxPage - 1, maxPage];
  }
  return [1, "...", nowPage - 2, nowPage - 1, nowPage, nowPage + 1, nowPage + 2, "...", maxPage];
}

interface PageProps {
  maxPage: number;
  nowPage: number;
  postType: TPost;
}

export function PageList({ maxPage, nowPage, postType }: PageProps) {
  const numberList = setNumberList(maxPage, nowPage);

  return (
    <ol className="flex gap-0.5 mb-1 px-3 py-1 rounded-lg bg-[--bg--sec]">
      {numberList.map((page, i) => {
        if (page === "...") {
          return <li key={i}>...</li>;
        }

        return (
          <li key={i}>
            <PageLink page={Number(page)} isActive={page === nowPage} postType={postType} />
          </li>
        );
      })}
    </ol>
  );
}
