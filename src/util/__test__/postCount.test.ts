import mock from "mock-fs";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { postCount, rootDirectory } from "../postCount";

describe("read posts", () => {
  beforeEach(() => {
    mock({
      [rootDirectory]: {
        posts: {
          "post1.mdx": "post1",
          "post2.mdx": "post2",
          "post3.mdx": "post3",
          "post4.mdx": "post4",
          "post5.mdx": "post5",
          "post6.mdx": "post6",
          "post7.mdx": "post7",
          "post8.mdx": "post8",
          "post9.mdx": "post9",
        },
      },
    });
  });

  afterEach(() => {
    mock.restore();
  });

  it("Should read files", () => {
    expect(postCount("posts", 9)).toBe(1);
    expect(postCount("posts")).toBe(2);
    expect(postCount("posts", 3)).toBe(3);
    expect(postCount("posts", 1)).toBe(9);
  });
});
