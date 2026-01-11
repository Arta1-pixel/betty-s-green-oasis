import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Hacen entregas a domicilio?",
    answer: "Sí, realizo entregas en toda la zona de Acapulco. El costo depende de la ubicación y cantidad de plantas. También puedes recoger directamente si lo prefieres."
  },
  {
    question: "¿Qué incluye cada taller?",
    answer: "Los talleres incluyen todos los materiales necesarios (macetas, sustrato, plantas para practicar), además de una guía impresa con los pasos básicos y asesoría durante la sesión."
  },
  {
    question: "¿Puedo pedir recomendaciones según mi espacio?",
    answer: "¡Por supuesto! Solo envíame fotos de tu espacio y te sugiero las plantas más adecuadas según la luz, ventilación y tu nivel de experiencia."
  },
  {
    question: "¿Qué tan seguido debo regar los cactus y suculentas?",
    answer: "En general, una vez por semana o cada 10 días es suficiente. Depende de la época del año y la ubicación. En los talleres explico cómo identificar cuándo necesitan agua."
  },
  {
    question: "¿Tienen garantía las plantas?",
    answer: "Las plantas se entregan en perfecto estado. Si sigues las recomendaciones de cuidado y surge algún problema en los primeros 15 días, te ayudo a solucionarlo sin costo."
  },
  {
    question: "¿Puedo regalar un taller?",
    answer: "Sí, puedes reservar un lugar para regalar. Te entrego un comprobante bonito para que lo entregues como presente."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Resuelve tus dudas
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card data-[state=open]:shadow-soft transition-shadow"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
