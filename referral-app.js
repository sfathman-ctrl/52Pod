/* =========================================================
   52 LAUNCH — REFERAL PAGE RENDERER
   =========================================================
   Reads the PRODUCTS array from referral-data.js and builds
   product cards. You should not need to edit this file —
   just edit referral-data.js instead.
   ========================================================= */

function createProductCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  if (item.image) {
    const media = document.createElement("div");
    media.className = "card-media card-media-product";
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name || "";
    media.appendChild(img);
    card.appendChild(media);
  }

  const body = document.createElement("div");
  body.className = "card-body";

  if (item.tag) {
    const tag = document.createElement("span");
    tag.className = "card-tag";
    tag.textContent = item.tag;
    body.appendChild(tag);
  }

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = item.name || "Untitled Product";
  body.appendChild(title);

  if (item.description) {
    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = item.description;
    body.appendChild(desc);
  }

  if (item.url) {
    const link = document.createElement("a");
    link.className = "card-link";
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = (item.cta || "View Product") + " →";
    body.appendChild(link);
  }

  card.appendChild(body);
  return card;
}

function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";
  window.PRODUCTS.forEach((item) => grid.appendChild(createProductCard(item)));
}

document.addEventListener("DOMContentLoaded", renderProducts);
