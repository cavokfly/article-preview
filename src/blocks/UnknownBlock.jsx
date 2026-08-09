import React from "react";

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
