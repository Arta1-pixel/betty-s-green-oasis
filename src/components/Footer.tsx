import logoImage from "@/assets/logo-betty-plantas.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background/80">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Betty Plantas" 
              className="h-12"
            />
          </a>

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
