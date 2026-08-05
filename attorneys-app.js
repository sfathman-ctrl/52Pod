/* =========================================================
   52 LAUNCH — OUR ATTORNEYS RENDERER
   =========================================================
   Reads the ATTORNEYS array from attorneys-data.js and
   builds cards with an optional contact block.
   You should not need to edit this file — edit
   attorneys-data.js instead.
   ========================================================= */

function createAttorneyCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  if (item.image) {
    const media = document.createElement("div");
    media.className = "card-media";
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
  title.textContent = item.name || "Untitled";
  body.appendChild(title);

  if (item.description) {
    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = item.description;
    body.appendChild(desc);
  }

  const hasContact = item.contactName || item.contactRole || item.contactEmail || item.contactPhone;
  if (hasContact) {
    const contactBox = document.createElement("div");
    contactBox.className = "card-contact";

    const contactLabel = document.createElement("span");
    contactLabel.className = "card-contact-label";
    contactLabel.textContent = "Contact";
    contactBox.appendChild(contactLabel);

    if (item.contactName) {
      const line = document.createElement("p");
      line.className = "card-contact-line";
      line.textContent = item.contactRole
        ? `${item.contactName} — ${item.contactRole}`
        : item.contactName;
      contactBox.appendChild(line);
    }

    if (item.contactEmail) {
      const emailLink = document.createElement("a");
      emailLink.className = "card-contact-line card-contact-link";
      emailLink.href = `mailto:${item.contactEmail}`;
      emailLink.textContent = item.contactEmail;
      contactBox.appendChild(emailLink);
    }

    if (item.contactPhone) {
      const phoneLink = document.createElement("a");
      phoneLink.className = "card-contact-line card-contact-link";
      phoneLink.href = `tel:${item.contactPhone.replace(/[^0-9+]/g, "")}`;
      phoneLink.textContent = item.contactPhone;
      contactBox.appendChild(phoneLink);
    }

    body.appendChild(contactBox);
  }

  if (item.url) {
    const link = document.createElement("a");
    link.className = "card-link";
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = item.cta || "Learn more →";
    body.appendChild(link);
  }

  card.appendChild(body);
  return card;
}

function renderAttorneys() {
  const grid = document.getElementById("attorney-grid");
  grid.innerHTML = "";

  if (!window.ATTORNEYS || window.ATTORNEYS.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Attorney profiles coming soon — add entries in attorneys-data.js.";
    grid.appendChild(empty);
    return;
  }

  window.ATTORNEYS.forEach((item) => grid.appendChild(createAttorneyCard(item)));
}

document.addEventListener("DOMContentLoaded", renderAttorneys);
