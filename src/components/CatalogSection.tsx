import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink } from "lucide-react";
import catalogImage from "@/assets/plants-catalog.jpg";

const WHATSAPP_NUMBER = "5217442230279";
const WHATSAPP_MESSAGE = "Hola Anini, me gustaría ver el catálogo de cactus disponibles";

const plantTypes = [
  { name: "Cactáceas", description: "Gran variedad de especies resistentes y decorativas" },
  { name: "Adenium Obesum", description: "Rosas del desierto en diferentes colores y variedades" },
  { name: "Injertos de Adenium", description: "Variedades únicas injertadas con flores espectaculares" },
];

const CatalogSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="catalogo" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={catalogImage}
                alt="Cactáceas y Adenium Obesum listos para entrega"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-background text-lg font-medium">
                  Catálogo actualizado disponible por WhatsApp
                </p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Nuestras plantas
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
                Opciones para casa, oficina o regalo
              </h2>
              <p className="text-lg text-muted-foreground">
                Ofrecemos cactáceas y variedades de injertos de Adenium Obesum listas para entrega en Acapulco. Puedes solicitar fotos actualizadas del catálogo por mensaje directo.
              </p>
            </div>

            <div className="space-y-4">
              {plantTypes.map((plant, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{plant.name}</h3>
                    <p className="text-muted-foreground text-sm">{plant.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="whatsapp" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1" />
                Ver catálogo por WhatsApp
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
