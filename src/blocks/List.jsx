import React from "react";

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
