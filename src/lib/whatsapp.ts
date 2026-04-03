const WHATSAPP_PHONE = "917012220726";

export function buildWhatsAppOrderUrl(productName: string, price: string, variant?: string): string {
  const lines = [
    `Hi, I'd like to place an order:`,
    ``,
    `*Product:* ${productName}`,
    ...(variant ? [`*Variant:* ${variant}`] : []),
    `*Price:* ${price}`,
    ``,
    `Please confirm availability and share payment details. Thank you!`,
  ];

  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
}
