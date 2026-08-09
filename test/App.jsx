import React from "react";
import { ArticlePreview } from "@cavokfly/article-preview";
import { sampleArticle } from "./sampleArticle.js";

export function App() {
  return (
    <div className="playground">
      <header className="playground-banner">
        <strong>@cavokfly/article-preview</strong>
        <span>local playground · edits in <code>src/</code> hot-reload here</span>
      </header>
      <ArticlePreview
        article={sampleArticle}
        byline={<span>By Cavokfly Flight Desk</span>}
      />
    </div>
  );
}
