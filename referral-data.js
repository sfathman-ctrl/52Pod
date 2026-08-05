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
  {
    name: "Example Client Product",
    tag: "Client Product",
    description: "Short description of what this client's product is and why it's worth referring.",
    url: "https://example.com",
    image: "", // optional — leave blank to hide the image block
    cta: "View Product"
  },

  /* ---- Add new products below this line ---- */

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
