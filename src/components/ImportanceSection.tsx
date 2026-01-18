import { Leaf, Droplets, Bug, Shield, Globe } from "lucide-react";

const importancePoints = [
  { icon: Droplets, text: "Regulan y almacenan agua en ecosistemas áridos" },
  { icon: Bug, text: "Sostienen polinizadores y fauna silvestre" },
  { icon: Leaf, text: "Crean microhábitats y protegen el suelo" },
  { icon: Shield, text: "Son especies clave para la biodiversidad" },
];

const representativeGenera = [
  "Astrophytum",
  "Ariocarpus", 
  "Mammillaria",
  "Ferocactus",
  "Echinocactus",
  "Turbinicarpus",
];

const ImportanceSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            🌵 Patrimonio Natural
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Importancia de las Cactáceas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Las cactáceas hacen posible la vida en ambientes extremos al conservar recursos, sostener fauna y estabilizar ecosistemas.
          </p>
        </div>

        {/* Importance Points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {importancePoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
            >
              <point.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm text-foreground">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Mexico Stats */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">México: Capital Mundial del Cactus</h3>
            </div>
            <p className="text-muted-foreground">
              De las ~1,400 especies de cactáceas en el mundo, <strong className="text-foreground">669 están en México</strong> y más de 518 son endémicas (solo existen aquí). Muchas están protegidas por la NOM-059-SEMARNAT-2010.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {representativeGenera.map((genus) => (
                <span
                  key={genus}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                >
                  {genus}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
            <p className="text-sm text-muted-foreground mb-2">Sabías que...</p>
            <p className="text-foreground font-medium">
              Muchos cactus mexicanos son endémicos de regiones muy específicas (a veces solo un valle o cerro) y tienen relaciones estrechas con polinizadores especializados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
