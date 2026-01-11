import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5217441234567";
const WHATSAPP_MESSAGE = "Hola Betty, me interesa conocer más sobre tus plantas";

const FloatingWhatsApp = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] px-5 py-3.5 rounded-full shadow-elevated hover:scale-105 hover:shadow-card transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline-block">WhatsApp</span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,45%)] animate-ping opacity-25" />
    </a>
  );
};

export default FloatingWhatsApp;
