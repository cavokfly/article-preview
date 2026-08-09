// Each renderer receives (block, index) and returns a React node.
// This is the ONE place block->UI mapping lives. Add a new key here
// (or pass an override via the <ArticlePreview renderers={...}> prop)
// whenever the CMS/editor introduces a new block type.

import { Paragraph } from "./Paragraph.jsx";
import { Heading } from "./Heading.jsx";
import { Quote } from "./Quote.jsx";
import { ImageBlock } from "./ImageBlock.jsx";
import { List } from "./List.jsx";
import { VideoBlock } from "./VideoBlock.jsx";
import { YoutubeBlock } from "./YoutubeBlock.jsx";

export { Paragraph, Heading, Quote, ImageBlock, List };
export { UnknownBlock } from "./UnknownBlock.jsx";

export const defaultRenderers = {
  paragraph: Paragraph,
  heading: Heading,
  quote: Quote,
  image: ImageBlock,
  list: List,
  video: VideoBlock,
  youtube: YoutubeBlock,
};
