import React from "react";

interface Props {
  children: React.ReactNode;
  title?: string;
  postType: TPost;
}

export function PostSection({ postType, title, children }: Props) {
  if (!title) title = postType;

  return (
    <div className="post-box">
      <h2 className="title-section">{title.toUpperCase()}</h2>

      {children}
    </div>
  );
}
