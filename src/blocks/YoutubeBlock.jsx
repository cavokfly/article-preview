import React from "react";
import "./styles.css";

function youtubeEmbedSrc(url) {
    try {
      const parsed = new URL(url)
      if (parsed.hostname.includes('youtu.be')) {
        const id = parsed.pathname.replace('/', '')
        return id ? `https://www.youtube.com/embed/${id}` : null
      }
      const id = parsed.searchParams.get('v')
      if (id) return `https://www.youtube.com/embed/${id}`
      const parts = parsed.pathname.split('/')
      const embedIndex = parts.indexOf('embed')
      if (embedIndex >= 0 && parts[embedIndex + 1]) {
        return `https://www.youtube.com/embed/${parts[embedIndex + 1]}`
      }
    } catch {
      return null
    }
    return null
  }


  export function YoutubeBlock({ block }) {
    const url = typeof block.url === 'string' ? block.url : ''
    const title =
      typeof block.title === 'string' && block.title
        ? block.title
        : 'Youtube Video'
    const embed = url ? youtubeEmbedSrc(url) : null
    if (!embed) return null
    return (
      <div className="ap-youtube" style={{ margin: '1.5rem 0' }}>
        <iframe
          src={embed}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ aspectRatio: '16 / 9', border: 0, display: 'block', width: '100%' }}
        />
      </div>
    )
  }