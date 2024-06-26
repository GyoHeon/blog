import { POSTS_PER_PAGE } from "@/constants/number";
import fs from "fs";
import path from "path";
import { isMdx } from "./mdx";

export const rootDirectory = path.join(process.cwd(), "mdx");

export function postCount(postType: TPost, postPerPage = POSTS_PER_PAGE) {
  const fileDirectory = path.join(rootDirectory, postType);

  const files = fs.readdirSync(fileDirectory).filter(isMdx);

  return Math.ceil(files.length / postPerPage);
}
