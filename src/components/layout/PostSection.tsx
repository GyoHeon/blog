import React from "react";

interface Props {
  postType: PostType;
  children: React.ReactNode;
}

export function PostSection({ postType, children }: Props) {
  return (
    <div className="post-box">
      <h2 className="title-section">{postType.toUpperCase()}</h2>

      {children}
    </div>
  );
}
