# @cavokfly/article-preview

Renders your article JSON into a readable preview — the same component used
across both React apps, so a new block type only needs to be taught once.

## Install

Build it, then either:

- **npm workspaces / monorepo** (recommended if both apps live in one repo):
  add this folder as a workspace package and `npm install` from the root.
- **Local link**: `npm link` inside this folder, `npm link @cavokfly/article-preview`
  in each consuming app.
- **Private registry**: `npm run build && npm publish` to a private npm
  registry (GitHub Packages, Verdaccio, etc.) once it's stable, then
  `npm install @cavokfly/article-preview` like any other dependency.

```
npm install
npm run build
```

## Usage

```jsx
import { ArticlePreview } from "@cavokfly/article-preview";
import "@cavokfly/article-preview/style.css";

function PreviewPage({ article }) {
  return <ArticlePreview article={article} />;
}
```

`article` is exactly the JSON shape from your API (`title`, `section`,
`excerpt`, `body[]`, `cover_image_url`, `published_at`, ...).

## Adding a byline

Your sample JSON doesn't include author data, so bylines are left to the
caller rather than assumed:

```jsx
<ArticlePreview
  article={article}
  byline={<span>By Jane Doe</span>}
/>
```

## Supported block types

`paragraph`, `heading` (with `level`), `quote` (with optional
`attribution`), `image` (`url`, `alt`, `caption`), `list` (`items[]`,
`ordered`).

An unrecognized `block.type` renders a visible dev-only warning instead of
crashing the page, so a newly introduced block never silently breaks
existing previews — it just needs a renderer added.

## Adding a new block type

Two options, in order of preference:

1. **Add it to the library** (`src/blocks/index.js`) so every consuming app
   gets it automatically — do this once the block type is stable.
2. **Override per-app** while prototyping, without touching the library:

```jsx
import { ArticlePreview, defaultRenderers } from "@cavokfly/article-preview";

function EmbedBlock({ block }) {
  return <iframe src={block.url} title={block.title} />;
}

<ArticlePreview
  article={article}
  renderers={{ embed: EmbedBlock }}
/>
```

## Versioning

Since both apps depend on this package, bump its version on any change to
the block schema or renderer output, even a styling tweak, so each app can
upgrade deliberately rather than silently inheriting a change on next
install.
