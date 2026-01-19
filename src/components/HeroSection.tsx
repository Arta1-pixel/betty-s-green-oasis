import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-plants.png";

const WHATSAPP_NUMBER = "5217442230279";
const WHATSAPP_MESSAGE = "Hola Anini, me interesa conocer tu catálogo de cactus";

const HeroSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Colección de cactáceas y Adenium Obesum en macetas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium backdrop-blur-sm border border-accent/30">
            🌵 Acapulco, Guerrero
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-tight">
            Cactáceas y Adenium Obesum
          </h1>
          
          <p className="text-xl md:text-2xl text-background/90 font-light">
            Plantas sanas, asesoría personalizada y talleres para aprender a cuidarlas.
          </p>
          
          <p className="text-lg text-background/80 max-w-lg">
            Soy <span className="font-semibold text-accent">Anini</span> y ofrezco cactáceas y variedades de injertos de Adenium Obesum cultivados con dedicación. También imparto cursos y talleres para que aprendas a cuidarlos y reproducirlos de forma sencilla.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="hero" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1" />
                Solicita catálogo
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-background/40 text-background hover:bg-background hover:text-foreground" asChild>
              <a href="#talleres">
                Ver talleres
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
