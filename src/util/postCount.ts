import fs from "fs";
import path from "path";
import { isMdx } from "./mdx";

const rootDirectory = path.join(process.cwd(), "mdx");

export function postCount(postType: TPost, postPerPage = 6) {
  const fileDirectory = path.join(rootDirectory, postType);

  const files = fs.readdirSync(fileDirectory).filter(isMdx);

  return Math.ceil(files.length / postPerPage);
}
