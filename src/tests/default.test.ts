import { Target } from "../runners/default";
import emulate from "@suwatte/emulator";
import { SearchRequest } from "@suwatte/daisuke";

describe("Default Source Tests", () => {
  const source = emulate(Target);
  const CONTENT_ID = "";
  test("Get Content", async () => {
    const data = await source.getContent(CONTENT_ID);
    expect(data);
  });

  test("Get Chapters", async () => {
    const chapters = await source.getChapters(CONTENT_ID);
    expect(chapters);
  });

  test("Get ChapterData", async () => {
    const chapterId = "";
    const data = await source.getChapterData(CONTENT_ID, chapterId);
    expect(data);
  });

  test("Get Search Results", async () => {
    const query: SearchRequest = {
      page: 1,
      includedTags: [],
      excludedTags: [],
      query: "doctor",
    };
    const results = await source.getSearchResults(query);
    expect(results);
  });

  test("Get Source Tags", async () => {
    const tags = await source.getSourceTags();
    expect(tags);
  });
});
