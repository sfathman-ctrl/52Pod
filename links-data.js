/**
 * 52 Launch Link Hub — link data
 * =================================
 * To add a new link: copy an object below, paste it into the LINKS array,
 * and fill in the fields. No other code needs to change — app.js renders
 * this array automatically.
 *
 * Fields:
 *   type        "video" | "link"
 *                 - "video": renders an embedded player. `url` must be an
 *                   *embed* URL (e.g. https://www.youtube.com/embed/VIDEO_ID).
 *                 - "link": renders a plain card (optionally with `image`).
 *   tag          Short label shown as a pill, e.g. "Video", "Article", "Tool"
 *   title        Card title
 *   description  1–2 sentence blurb
 *   url          For type "video": the embeddable URL.
 *                For type "link": the page you want the card to open.
 *   image        (optional, "link" only) thumbnail image URL
 */

const LINKS = [
  {
    type: "video",
    tag: "Video",
    title: "Featured Video",
    description: "Embedded straight from YouTube — swap the URL to feature a different video.",
    url: "https://www.youtube.com/embed/8vvZedV7hQo?si=WG9lh3mSfXNSdfg6"
  },
  {
    type: "video",
    tag: "Video",
    title: "Video Title Here",
    description: "Short blurb about this video.",
    url: "https://www.youtube.com/embed/xCw4KE6EUms?si=en908-1Y56eFw_7k"
  },
  {
    type: "video",
    tag: "Video",
    title: "Video Title Here",
    description: "Short blurb about this video.",
    url: "https://www.youtube.com/embed/RhgypZAN4UE?si=IFqmminPtqJKpuyw"
  },
  {
    type: "video",
    tag: "Video",
    title: "Video Title Here",
    description: "Short blurb about this video.",
    url: "https://www.youtube.com/embed/3jZhdn62GMc?si=-xSTeP1N3jwanLzp"
  },
  {
    type: "video",
    tag: "Video",
    title: "Video Title Here",
    description: "Short blurb about this video.",
    url: "https://www.youtube.com/embed/bjv944Cx9Rs?si=rl63Fo1Izz6v4BHt"
  },
  {
    type: "video",
    tag: "Video",
    title: "Video Title Here",
    description: "Short blurb about this video.",
    url: "https://www.youtube.com/embed/SFrMoT2PnfQ?si=uRQUgEwmt6zC6Dil"
  }
];
  // },
];
