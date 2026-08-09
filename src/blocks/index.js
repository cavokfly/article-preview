import React from "react";

// Each renderer receives (block, index) and returns a React node.
// This is the ONE place block->UI mapping lives. Add a new key here
// (or pass an override via the <ArticlePreview renderers={...}> prop)
// whenever the CMS/editor introduces a new block type.

export function Paragraph({ block }) {
  return <p className="ap-paragraph">{block.text}</p>;
}

export function Heading({ block }) {
  const level = block.level && block.level >= 1 && block.level <= 6 ? block.level : 2;
  const Tag = `h${level}`;
  return <Tag className={`ap-heading ap-heading--${level}`}>{block.text}</Tag>;
}

export function Quote({ block }) {
  return (
    <blockquote className="ap-quote">
      <p>{block.text}</p>
      {block.attribution && <cite className="ap-quote-attribution">{block.attribution}</cite>}
    </blockquote>
  );
}

export function ImageBlock({ block }) {
  return (
    <figure className="ap-image">
      <img src={block.url} alt={block.alt || ""} />
      {block.caption && <figcaption>{block.caption}</figcaption>}
    </figure>
  );
}

export function List({ block }) {
  const Tag = block.ordered ? "ol" : "ul";
  return (
    <Tag className="ap-list">
      {(block.items || []).map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  );
}

// Fallback for block types the renderer doesn't recognize yet.
// Renders nothing visible but keeps a trace in the DOM for debugging,
// so an unknown type never crashes the page or silently drops content
// without a way to notice it during development.
export function UnknownBlock({ block }) {
  if (process.env.NODE_ENV !== "production") {
    return (
      <div className="ap-unknown-block" data-block-type={block.type}>
        {`[unrecognized block type: "${block.type}"]`}
      </div>
    );
  }
  return null;
}

export const defaultRenderers = {
  paragraph: Paragraph,
  heading: Heading,
  quote: Quote,
  image: ImageBlock,
  list: List,
};
