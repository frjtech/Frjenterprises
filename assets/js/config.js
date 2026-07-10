/**
 * Konfigirasyon santral pou FRJ Enterprises LLC.
 * Chanje valè yo anba a pou mete vrè enfòmasyon biznis ou.
 * Tout paj yo li fichye sa a, kidonk ou chanje yon sèl kote.
 */
const FRJ_CONFIG = {
  businessName: "FRJ Enterprises LLC",
  // Nimewo WhatsApp Business ak kòd peyi, san "+", san espas. Egzanp pou Ayiti: 509XXXXXXXX
  whatsapp: "15555550123", // TODO: mete vrè nimewo WhatsApp ou
  email: "info@frjenterprises.com", // TODO: mete vrè imèl biznis ou
  instagram: "https://instagram.com/frjenterprises", // TODO
  facebook: "https://facebook.com/frjenterprises", // TODO
  location: "New Haven, CT, USA",
};

function frjWhatsappLink(message) {
  const base = `https://wa.me/${FRJ_CONFIG.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
