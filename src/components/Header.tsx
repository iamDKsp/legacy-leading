import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={logo}
            alt="Legacy Assessoria Especializada"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-transparent group-hover:border-primary/50 transition-colors"
          />
          <div className="hidden sm:block">
            <span className="text-lg font-display font-bold text-gradient-gold">Legacy</span>
            <span className="block text-[10px] text-muted-foreground tracking-widest uppercase group-hover:text-primary transition-colors">Assessoria Especializada</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:shadow-gold hover:opacity-90 transition-all"
          >
            Fale Conosco
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2 hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-gold text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold text-center mt-4"
              >
                Fale com um especialista
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
