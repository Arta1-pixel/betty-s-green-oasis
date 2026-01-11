import { Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background/80">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-accent" />
            <span className="font-display font-semibold text-background">
              Betty Plantas
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#catalogo" className="hover:text-background transition-colors">
              Catálogo
            </a>
            <a href="#talleres" className="hover:text-background transition-colors">
              Talleres
            </a>
            <a href="#faq" className="hover:text-background transition-colors">
              Preguntas frecuentes
            </a>
          </nav>

          <p className="text-sm">
            © {currentYear} Betty Plantas. Acapulco, Guerrero.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
