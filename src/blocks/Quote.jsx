import React from "react";

export function Quote({ block }) {
  return (
    <blockquote className="ap-quote">
      <p>{block.text}</p>
      {block.attribution && <cite className="ap-quote-attribution">{block.attribution}</cite>}
    </blockquote>
  );
}
