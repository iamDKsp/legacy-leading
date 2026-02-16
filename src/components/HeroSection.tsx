import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5517991951957";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Assessoria Jurídica Especializada
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Sua <span className="text-gradient-gold">indenização</span> é o nosso compromisso
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            Atuamos em todo o Brasil com foco em resultados. Recupere o que é seu por direito com quem entende do assunto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-md text-base font-bold shadow-gold-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={20} />
              Fale com um especialista agora
            </a>
            <a
              href="https://www.instagram.com/legacyassessoria_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/40 text-foreground px-8 py-4 rounded-md text-base font-medium hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Siga no Instagram
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            {[
              { value: "+5.000", label: "Clientes atendidos" },
              { value: "98%", label: "Taxa de sucesso" },
              { value: "R$50M+", label: "Em indenizações" },
              { value: "Nacional", label: "Atendimento" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
