document.addEventListener("DOMContentLoaded", () => {
  // Ranpli tout eleman ki make ak enfòmasyon biznis la (footer, header, elatriye)
  document.querySelectorAll("[data-frj-business]").forEach((el) => {
    el.textContent = FRJ_CONFIG.businessName;
  });
  document.querySelectorAll("[data-frj-email]").forEach((el) => {
    el.textContent = FRJ_CONFIG.email;
    el.href = `mailto:${FRJ_CONFIG.email}`;
  });
  document.querySelectorAll("[data-frj-location]").forEach((el) => {
    el.textContent = FRJ_CONFIG.location;
  });
  document.querySelectorAll("[data-frj-instagram]").forEach((el) => {
    el.href = FRJ_CONFIG.instagram;
  });
  document.querySelectorAll("[data-frj-facebook]").forEach((el) => {
    el.href = FRJ_CONFIG.facebook;
  });
  document.querySelectorAll("[data-frj-whatsapp]").forEach((el) => {
    const msg = el.getAttribute("data-frj-whatsapp") || "";
    el.href = frjWhatsappLink(msg);
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.querySelectorAll("[data-frj-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Mennyi ("hamburger") pou telefòn
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("is-open");
      toggle.classList.toggle("is-open");
    });
  }

  // Make lyen aktif la nan navigasyon an
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-menu a").forEach((a) => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
});

// ---- Fòm Shein: konstwi mesaj WhatsApp otomatikman ----
function frjSubmitSheinForm(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const link = form.link.value.trim();
  const qty = form.qty.value.trim();
  const notes = form.notes.value.trim();

  const lines = [
    `Bonjou ${FRJ_CONFIG.businessName}! Mwen ta renmen fè yon kòmand sou Shein.`,
    `Non: ${name}`,
    `Telefòn/WhatsApp: ${phone}`,
    `Lyen pwodwi a: ${link}`,
    `Kantite: ${qty}`,
  ];
  if (notes) lines.push(`Nòt: ${notes}`);

  window.open(frjWhatsappLink(lines.join("\n")), "_blank", "noopener");
  return false;
}

// ---- Rezèvasyon pwodwi nan Shop Now ----
function frjReserveProduct(productName, price) {
  const msg = `Bonjou ${FRJ_CONFIG.businessName}! Mwen ta renmen rezève pwodwi sa a: "${productName}" (${price}).`;
  window.open(frjWhatsappLink(msg), "_blank", "noopener");
}

// ---- Filtè kategori nan Shop Now ----
function frjFilterShop(category, btn) {
  document.querySelectorAll(".shop-filters button").forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  document.querySelectorAll(".product-card").forEach((card) => {
    const match = category === "all" || card.dataset.category === category;
    card.style.display = match ? "" : "none";
  });
}
