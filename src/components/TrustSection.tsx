import { Leaf, Heart, Users } from "lucide-react";

const trustItems = [
  {
    icon: Leaf,
    title: "Plantas sanas y seleccionadas",
    description: "Cada planta es cultivada con cuidado y revisada antes de entrega."
  },
  {
    icon: Heart,
    title: "Asesoría personalizada",
    description: "Te ayudo a elegir la planta ideal según tu espacio y experiencia."
  },
  {
    icon: Users,
    title: "Talleres prácticos y accesibles",
    description: "Aprende técnicas reales para mantener tus plantas hermosas."
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Experiencia y dedicación
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Más de 8 años cultivando y enseñando
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestro crecimiento ha sido gracias a recomendaciones de personas que valoran la calidad, la atención cercana y el acompañamiento práctico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
