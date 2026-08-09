import React from "react";

export function VideoBlock({ block }) {
    const url = typeof block.url === 'string' ? block.url : ''
    const caption = typeof block.caption === 'string' ? block.caption : ''
    if (!url) return null
    return (
      <figure className="ap-video" style={{ margin: '1.5rem 0' }}>
        <video controls src={url} style={{ display: 'block', maxWidth: '100%' }} />
        {caption ? (
          <figcaption style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            {caption}
          </figcaption>
        ) : null}
      </figure>
    )
  }