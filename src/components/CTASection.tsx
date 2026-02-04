import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "5217442230279";
const WHATSAPP_MESSAGE = "Hola Anini, me gustaría más información";
const EMAIL = "contacto@loscactus.mx";

const CTASection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-20 gradient-hero text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            ¿Lista para elegir tus plantas o tomar un taller?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Escríbeme y te atiendo personalmente para ayudarte a encontrar lo que buscas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1" />
                Contáctame por WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 text-primary-foreground/80">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{EMAIL}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Acapulco, Guerrero</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
