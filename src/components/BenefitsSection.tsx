import { Sun, Droplets, HandHeart, Sprout } from "lucide-react";

const benefits = [
  {
    icon: Sun,
    title: "Ideales para interiores y exteriores",
    description: "Plantas versátiles que se adaptan a diferentes espacios y condiciones de luz."
  },
  {
    icon: Droplets,
    title: "Bajo mantenimiento",
    description: "Cactus y suculentas resistentes que requieren pocos cuidados y riegos espaciados."
  },
  {
    icon: HandHeart,
    title: "Acompañamiento personalizado",
    description: "Te asesoro para elegir la planta perfecta según tu espacio y experiencia."
  },
  {
    icon: Sprout,
    title: "Aprende a reproducirlas",
    description: "Con nuestros talleres, podrás multiplicar tu colección de forma sencilla."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Ventajas
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Qué ganas al comprar con nosotros
          </h2>
          <p className="text-lg text-muted-foreground">
            No solo vendemos plantas; enseñamos a mantenerlas vivas, bonitas y fuertes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
