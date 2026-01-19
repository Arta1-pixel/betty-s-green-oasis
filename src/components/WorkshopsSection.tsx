import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, CheckCircle2 } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const WHATSAPP_NUMBER = "5217442230279";
const WHATSAPP_MESSAGE = "Hola Anini, me interesa inscribirme a un taller de plantas";

const workshopFeatures = [
  "Técnicas de riego y cuidado básico",
  "Prevención y control de plagas",
  "Reproducción por esqueje y división",
  "Elección del sustrato adecuado",
  "Materiales incluidos para practicar",
];

const WorkshopsSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="talleres" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Cursos y talleres
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
                Aprende paso a paso con guía personalizada
              </h2>
              <p className="text-lg text-muted-foreground">
                Imparto talleres presenciales donde enseño técnicas sencillas para mantener tus plantas en buen estado, evitar plagas y reproducirlas adecuadamente.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {workshopFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Workshop info cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-secondary text-center">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Grupos pequeños</p>
                <p className="font-semibold text-foreground">4-8 personas</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary text-center">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Duración</p>
                <p className="font-semibold text-foreground">2-3 horas</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary text-center">
                <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Fechas</p>
                <p className="font-semibold text-foreground">Fines de semana</p>
              </div>
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Reservar mi lugar
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={workshopImage}
                alt="Taller práctico de suculentas con materiales incluidos"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
