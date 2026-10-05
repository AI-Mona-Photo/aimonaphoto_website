import { Style } from "@/types/studio";

const PHONE_NUMBER = "919423233213";

export function buildWhatsAppURL(style?: Style): string {
  let message = "Hello Mona Photo Studio,\n\n";

  if (style) {
    message += `I want this AI photo style:\n\nStyle ID: ${style.id}\nStyle: ${style.name}\nPrice shown: ₹${style.price}\n\nI will send my original photo now.\n\nThank you.`;
  } else {
    message += "I am interested in your AI photo services. Please share more details.\n\nThank you.";
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
}
