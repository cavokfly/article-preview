import React from "react";

export function Heading({ block }) {
  const level = block.level && block.level >= 1 && block.level <= 6 ? block.level : 2;
  const Tag = `h${level}`;
  return <Tag className={`ap-heading ap-heading--${level}`}>{block.text}</Tag>;
}
