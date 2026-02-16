import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-legacy.jfif";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5517991951957";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Legacy Assessoria Jurídica" className="h-12 w-12 rounded-full object-cover" />
          <div className="hidden sm:block">
            <span className="text-lg font-display font-bold text-gradient-gold">Legacy</span>
            <span className="block text-xs text-muted-foreground tracking-widest uppercase">Assessoria Jurídica</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Fale Conosco
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold text-center"
            >
              Fale com um especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
