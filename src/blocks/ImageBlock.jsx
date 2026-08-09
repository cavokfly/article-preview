import React from "react";

export function ImageBlock({ block }) {
  return (
    <figure className="ap-image">
      <img src={block.url} alt={block.alt || ""} />
      {block.caption && <figcaption>{block.caption}</figcaption>}
    </figure>
  );
}
