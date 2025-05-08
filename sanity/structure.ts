// ./sanity/structure.ts
import type { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // example structure
      // S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("startup").title("Startups"),
    ]);
