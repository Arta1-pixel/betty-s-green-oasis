import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5217441234567";
const WHATSAPP_MESSAGE = "Hola Betty, quiero hacer un pedido";

const steps = [
  {
    number: "01",
    title: "Solicita el catálogo",
    description: "Escríbeme por WhatsApp y te envío fotos actualizadas de las plantas disponibles."
  },
  {
    number: "02",
    title: "Elige tus plantas o taller",
    description: "Te asesoro para seleccionar las mejores opciones según tu espacio y experiencia."
  },
  {
    number: "03",
    title: "Confirma tu pedido",
    description: "Acordamos fecha de entrega o tu lugar en el próximo taller disponible."
  },
  {
    number: "04",
    title: "Recibe seguimiento",
    description: "Después de tu compra, te acompaño con consejos y resuelvo tus dudas."
  }
];

const ProcessSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Proceso simple
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprar plantas o reservar un taller es muy sencillo
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card p-6 rounded-2xl border border-border h-full">
                <span className="text-4xl font-display font-bold text-accent/30">
                  {step.number}
                </span>
                <h3 className="text-lg font-display font-semibold text-foreground mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="whatsapp" size="lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1" />
              Iniciar pedido
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
