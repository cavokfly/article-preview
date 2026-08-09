/** Sample article covering every built-in block type. */
export const sampleArticle = {
  title: "Clear skies over the Cordillera: a morning above the valley",
  excerpt:
    "A short flight report with headings, quotes, media, and lists — useful for exercising every renderer in the preview library.",
  section: { name: "Flight Reports" },
  published_at: "2026-03-12T14:30:00.000Z",
  updated_at: "2026-03-13T09:05:00.000Z",
  cover_image_url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80",
  body: [
    {
      type: "paragraph",
      text: "We launched just after sunrise with light winds and a thin haze hanging over the valley floor. Visibility improved quickly as we climbed through two thousand feet.",
    },
    {
      type: "heading",
      level: 2,
      text: "Departure and climb",
    },
    {
      type: "paragraph",
      text: "The runway was dry. Traffic was light. Once clear of the pattern we turned north toward the ridge line and leveled off for a brief systems check.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Preflight and weather brief",
        "Engine start and taxi",
        "Departure to the north ridge",
        "Photo orbit above the valley",
      ],
    },
    {
      type: "quote",
      text: "The air was so smooth it felt like the airplane was sitting still while the mountains moved underneath.",
      attribution: "Pilot notes",
    },
    {
      type: "heading",
      level: 3,
      text: "Over the ridge",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1200&q=80",
      alt: "Small airplane wing above mountains",
      caption: "Looking west from the ridge line shortly after sunrise.",
    },
    {
      type: "paragraph",
      text: "From there we ran a short video pass along the ridgeline before heading home. Below is a sample video block and a YouTube embed for renderer coverage.",
    },
    {
      type: "video",
      url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      caption: "Sample local-style video block (public demo clip).",
    },
    {
      type: "youtube",
      url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
      title: "Sample YouTube embed",
    },
    {
      type: "list",
      ordered: false,
      items: ["Light turbulence near the ridge", "Excellent photo light", "Uneventful return"],
    },
    {
      type: "paragraph",
      text: "If an unrecognized block type shows up in development, the unknown-block fallback should render a visible warning instead of crashing the page.",
    },
    {
      type: "callout",
      text: "This block type is intentionally unsupported.",
    },
  ],
};
