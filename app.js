/**
 * 52 Launch Link Hub — renderer
 * Reads window.LINKS (defined in links-data.js) and builds one card per entry.
 * You should not need to edit this file to add links — edit links-data.js instead.
 */

function buildVideoCard(item) {
  return `
    <article class="card">
      <div class="card-media">
        <iframe
          src="${item.url}"
          title="${escapeHtml(item.title)}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>
      <div class="card-body">
        <span class="card-tag">${escapeHtml(item.tag || "Video")}</span>
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <p class="card-desc">${escapeHtml(item.description || "")}</p>
      </div>
    </article>
  `;
}

function buildLinkCard(item) {
  const media = item.image
    ? `<div class="card-media"><img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy"></div>`
    : "";

  return `
    <article class="card">
      ${media}
      <div class="card-body">
        <span class="card-tag">${escapeHtml(item.tag || "Link")}</span>
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <p class="card-desc">${escapeHtml(item.description || "")}</p>
        <a class="card-link" href="${item.url}" target="_blank" rel="noopener">Open link →</a>
      </div>
    </article>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function render() {
  const container = document.getElementById("links-container");
  if (!container || !Array.isArray(window.LINKS)) return;

  container.innerHTML = window.LINKS
    .map((item) => (item.type === "video" ? buildVideoCard(item) : buildLinkCard(item)))
    .join("");
}

document.addEventListener("DOMContentLoaded", render);
