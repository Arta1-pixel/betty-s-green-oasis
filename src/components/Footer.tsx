import logoImage from "@/assets/logo-cactus-anini.jpg";
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background/80">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Los Cactus de Anini" 
              className="h-12 rounded-lg"
            />
          </a>

          <nav className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <a href="#catalogo" className="hover:text-background transition-colors">
              Catálogo
            </a>
            <a href="#talleres" className="hover:text-background transition-colors">
              Talleres
            </a>
            <a href="#faq" className="hover:text-background transition-colors">
              Preguntas frecuentes
            </a>
            <a 
              href="https://www.instagram.com/el_jardin_de_mis_adenium?utm_source=qr&igsh=dGJzMWlwb2c0dW1r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </nav>

          <p className="text-sm">
            © {currentYear} Los Cactus de Anini. Acapulco, Guerrero.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
