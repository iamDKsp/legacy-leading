import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5517991951957";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold-lg hover:scale-110 transition-transform duration-300 animate-pulse-gold"
      aria-label="WhatsApp"
    >
      <MessageCircle className="text-primary-foreground" size={26} />
    </a>
  );
};

export default WhatsAppFloat;
