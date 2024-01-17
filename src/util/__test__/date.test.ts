import { describe, expect, it } from "vitest";
import { dateSortComparator } from "../date";

const emptyMetadata = {
  title: "",
  description: "",
  slug: "",
  tags: "",
  image: "",
  date: "",
};

const makeMetaWithDate = (date: string) => ({
  ...emptyMetadata,
  date,
});

const meta1 = makeMetaWithDate("2023.10.25");
const meta2 = makeMetaWithDate("2023.10.26");
const meta3 = makeMetaWithDate("2023.10.27");
const meta4 = makeMetaWithDate("2023.10.27");

describe("compare with date", () => {
  it("Should read files", () => {
    expect(dateSortComparator(meta1, meta2)).toBeGreaterThan(0);
    expect(dateSortComparator(meta3, meta2)).toBeLessThan(0);
    expect(dateSortComparator(meta3, meta4)).toBe(0);
  });
});
