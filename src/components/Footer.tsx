import logo from "@/assets/logo-legacy.jfif";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Legacy" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <span className="font-display font-bold text-gradient-gold">Legacy</span>
              <span className="block text-xs text-muted-foreground">Assessoria Jurídica</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://www.instagram.com/legacyassessoria_/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="https://api.whatsapp.com/send?phone=5517991951957" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Legacy Assessoria Jurídica. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
