/* =========================================================
   52 LAUNCH — REFERAL PAGE DATA (Client Products)
   =========================================================
   This is the ONLY file you need to edit to add, remove, or
   reorder client products on the Referal page.

   Each entry in the PRODUCTS array is one card.

   Required fields: name, tag, description, url
   Optional fields: image (product photo/thumbnail URL),
                    cta (button text, defaults to "View Product")

   To add a new product: copy a block below, paste it above
   the "Add new products below this line" marker, edit values.
   ========================================================= */

const PRODUCTS = [


  /* ---- Add new products below this line ---- */
 {
    name: "Eggmazing",
    tag: "Consumer Product",
    description: "The patented spinning Easter egg decorator that's sold over 55 million units and gone viral year after year.",
    url: "https://www.52launch.com/eggmazing",
    cta: "See the case study →"
  },
  {
    name: "Unshrinkit",
    tag: "Consumer Product",
    description: "The Shark Tank / Mark Cuban–backed formula that safely un-shrinks sweaters, hats, and clothing back to their original size.",
    url: "https://www.52launch.com/unshrinkit",
    cta: "See the case study →"
  },
  {
    name: "innovo+ Challenger",
    tag: "Outdoor / Watercraft",
    description: "A first-of-its-kind three-piece modular paddle board/kayak hybrid — more stable than inflatable boards, more storable than hardtops.",
    url: "https://innovo.plus/products/challenger",
    cta: "Shop innovo+ →"
  },
  {
    name: "Bigga Balls Golf",
    tag: "Golf / Lifestyle",
    description: "A golf lifestyle brand featuring USGA-approved golf balls, hats, towels, and accessories for players who don't take themselves too seriously.",
    url: "https://biggaballs.com",
    cta: "Shop Bigga Balls →"
  },
  {
    name: "Klockit Golf",
    tag: "Golf / Training",
    description: "A durable swing-training device built to develop power and precision — born from a backyard prototype, now featured in a national golf magazine.",
    url: "https://klockitgolf.com",
    cta: "Shop Klockit →"
  },
  {
    name: "Shrub Shield",
    tag: "Home & Garden",
    description: "A plant and shrub protection solution built to keep gardens safe from damage.",
    url: "", // TODO: confirm live product URL
    cta: "Learn more →"
  },
  {
    name: "Framing Buddy",
    tag: "Tools / DIY",
    description: "An ergonomic 16\" on-center spacing tool that acts as a second hand for DIY builders framing walls.",
    url: "", // TODO: confirm live product URL
    cta: "Learn more →"
  },
  // Copy/paste this template for each new client product:
  // {
  //   name: "Product Name",
  //   tag: "Client Product",
  //   description: "One or two sentences about the product.",
  //   url: "https://client-site.com",
  //   image: "https://client-site.com/thumbnail.jpg", // optional
  //   cta: "Refer a Client" // optional, defaults to "View Product"
  // },
];

window.PRODUCTS = PRODUCTS;
