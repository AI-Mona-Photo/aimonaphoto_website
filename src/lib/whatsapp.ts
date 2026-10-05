import { Style } from "@/types/studio";
import { translations } from "./i18n/translations";
import { Language } from "./i18n/LanguageContext";

const PHONE_NUMBER = "919423233213";

export function buildWhatsAppURL(language: Language = "en", style?: Style): string {
  const t = translations[language].whatsapp;
  let message = "";

  if (style) {
    const styleName = language === "mr" && style.marathiName ? style.marathiName : 
                      language === "hi" && style.hindiName ? style.hindiName : 
                      style.name;

    message = `${t.hello}${t.styleId} ${style.id}\n${t.style} ${styleName}\n${t.price}${style.price}${t.footer}`;
  } else {
    message = t.defaultMsg;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
}
