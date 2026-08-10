import React from "react";
import { defaultRenderers, UnknownBlock } from "./blocks/index.js";
import "./ArticlePreview.css";

function formatDate(iso) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return null;
  }
}

function CanRenderBlock(article, block, index) {
  // return false if the first block is a heading level 1 
  // with the same text as the article title
  if (index === 0 && block.type === "heading" 
    && block.level === 1 
    && block.text.trim().toLowerCase() === article.title.trim().toLowerCase()) {
    return false;
  }
  return true;
}

/**
 * Renders an article JSON object (title, section, excerpt, body[], etc.)
 * as a readable preview page.
 *
 * @param {object} props
 * @param {object} props.article - the article JSON, e.g. from your CMS API
 * @param {object} [props.renderers] - override/extend block renderers,
 *   merged over the built-in defaults: { [blockType]: Component }
 * @param {React.ReactNode} [props.byline] - optional custom byline content
 *   (your JSON sample doesn't include authors, so this is left to the caller)
 */
export function ArticlePreview({ article, renderers, byline }) {
  if (!article) return null;

  const blockRenderers = { ...defaultRenderers, ...(renderers || {}) };
  const published = formatDate(article.published_at);
  const updated = formatDate(article.updated_at);
  const showUpdated = updated && updated !== published;

  return (
    <article className="ap-root">
      {article.section?.name && (
        <div className="ap-eyebrow">{article.section.name}</div>
      )}

      <h1 className="ap-title">{article.title}</h1>

      {article.excerpt && <p className="ap-excerpt">{article.excerpt}</p>}

      <div className="ap-divider" />

      <div className="ap-meta-row">
        <div className="ap-meta-left">
          {byline}
          {(published || showUpdated) && (
            <span className="ap-dates">
              {published && <>Published {published}</>}
              {showUpdated && <> · Updated {updated}</>}
            </span>
          )}
        </div>
      </div>

      {article.cover_image_url && (
        <figure className="ap-cover">
          <img src={article.cover_image_url} alt={article.title} />
        </figure>
      )}

      <div className="ap-body">
        {(article.body || []).map((block, i) => {
          const Renderer = blockRenderers[block.type] || UnknownBlock;
          if (CanRenderBlock(article, block, i)) {
            return <Renderer block={block} index={i} key={i} />;
          }
          return null;
        })}
      </div>
    </article>
  );
}
