/* =========================================================
   52 LAUNCH — LINK HUB DATA
   =========================================================
   This is the ONLY file you need to edit to add, remove,
   or reorder links/videos on the page.

   Each entry in the LINKS array is one card. Two types:

   1) type: "video"  -> renders an embedded YouTube iframe
      required fields: type, tag, title, description, url
      (url = the exact .../embed/VIDEO_ID?... link)

   2) type: "link"   -> renders a clickable card
      required fields: type, tag, title, description, url
      optional field:  image (thumbnail URL)

   To add a new one: copy a block below, paste it above the
   "Add new links below this line" marker, edit the values.
   ========================================================= */

const LINKS = [
  {
    type: "video",
    tag: "Video",
    title: "Featured Video",
    description: "Original featured video for the link hub.",
    url: "https://www.youtube.com/embed/8vvZedV7hQo?si=WG9lh3mSfXNSdfg6"
  },
  {
    type: "video",
    tag: "Video",
    title: "Video 2",
    description: "Short blurb about this video.",
    url: "https://www.youtube.com/embed/xCw4KE6EUms?si=en908-1Y56eFw_7k"
  },
  {
    type: "video",
    tag: "Video",
    title: "Video 3",
    description: "Short blurb about this video.",
    url: "https://www.youtube.com/embed/RhgypZAN4UE?si=IFqmminPtqJKpuyw"
  },
  {
    type: "video",
    tag: "Video",
    title: "Video 4",
    description: "Short blurb about this video.",
    url: "https://www.youtube.com/embed/3jZhdn62GMc?si=-xSTeP1N3jwanLzp"
  },
  {
    type: "video",
    tag: "Video",
    title: "Video 5",
    description: "Short blurb about this video.",
    url: "https://www.youtube.com/embed/bjv944Cx9Rs?si=rl63Fo1Izz6v4BHt"
  },
  {
    type: "video",
    tag: "Video",
    title: "Video 6",
    description: "Short blurb about this video.",
    url: "https://www.youtube.com/embed/SFrMoT2PnfQ?si=uRQUgEwmt6zC6Dil"
  },

  /* ---- Add new links below this line ---- */

  // Example of a plain link card (copy/paste and edit):
  // {
  //   type: "link",
  //   tag: "Article",
  //   title: "My New Link",
  //   description: "What this is.",
  //   url: "https://example.com",
  //   image: "https://example.com/thumb.jpg" // optional
  // },
];
