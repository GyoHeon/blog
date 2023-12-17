import { afterEach, beforeEach, describe, expect, it } from "jest";
import { mock } from "mock-fs";
import { postCount } from "../postCount";

describe("read posts", () => {
  beforeEach(() => {
    mock({
      mdx: {
        post: {
          "post1.mdx": "post1",
          "post2.mdx": "post2",
          "post3.mdx": "post3",
        },
      },
    });
  });

  afterEach(() => {
    mock.restore();
  });

  it("Should read files", () => {
    expect(postCount("posts", 6)).toBe(1);
  });
});
