import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Plantas", href: "#catalogo" },
    { label: "Talleres", href: "#talleres" },
    { label: "Preguntas", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Leaf className={`w-7 h-7 transition-colors ${isScrolled ? "text-primary" : "text-background"}`} />
          <span className={`font-display font-bold text-xl transition-colors ${isScrolled ? "text-foreground" : "text-background"}`}>
            Betty Plantas
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-background"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button variant={isScrolled ? "default" : "outline"} size="sm" className={!isScrolled ? "border-background/40 text-background hover:bg-background hover:text-foreground" : ""} asChild>
            <a href="#catalogo">Ver catálogo</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-background"}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-card">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground font-medium py-2 hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" asChild className="mt-2">
              <a href="#catalogo" onClick={() => setIsMobileMenuOpen(false)}>
                Ver catálogo
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
